const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password, profilePic } = req.body,
      db = req.app.get("db");

    const result = await db.users.get_user([username]);
    const existingUser = result[0];
    if (existingUser) {
      return res.status(409).send("Username already in use");
    }

    let salt = bcrypt.genSaltSync(10),
      hash = bcrypt.hashSync(password, salt);

    const registeredUser = await db.users.register_user([
      username,
      hash,
      profilePic,
    ]);
    const user = registeredUser[0];
    req.session.user = {
      username: user.username,
      id: user.id,
    };
    res.status(201).send(req.session.user);
  },
  login: async (req, res) => {
    const { username, password } = req.body,
      db = req.app.get("db");
    console.log(username);

    const foundUser = await db.users.get_user([username]);
    const user = foundUser[0];
    if (!user) {
      return res.status(400).send("Username is not found");
    }

    const authenticated = bcrypt.compareSync(password, user.password);
    if (!authenticated) {
      return res.status(401).send("Password is incorrect");
    }

    delete user.password;
    req.session.user = user;
    res.status(202).send(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  },
  verify: (req, res) => {
    if (req.session.user) {
      return res.status(200).send({
        verified: true,
        data: req.session.user,
      });
    } else {
      res.status(200).send({
        verified: false,
        data: "Session cookie does not exist or is expired.",
      });
    }
  },
};
