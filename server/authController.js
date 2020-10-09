const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password, profilePic} = req.body,
        db = req.app.get('db');

        const result = await db.users.get_user([username]);
        const existingUser = result[0];
        if(existingUser) {
            return res.status(409).send('Username already in use');
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        const registeredUser = await db.users.register_user({username, hash, profilePic});
        const user = registeredUser[0];
        req.session.user = {
            username: user.username,
            id: user.id,
        };
        res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {username, password} = req.body,
        db = req.app.get('db')

        const foundUser = await db.users.get_user({username})
        const user = foundUser[0];
        if(!user) {
            return res.status(400).send('Username is not found')
        }

        const authenticated = bcrypt.compareSync(password, user.hash);
        if(!authenticated) {
            return res.status(401).send('Password is incorrect')
        }

        delete user.hash;
        req.session.user = user;
        res.status(202).send(req.session.user)

    },
    logout: async (req, res) => {
        req.session.destroy();
        res.status(200);
    }
}