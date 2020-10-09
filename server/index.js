require("dotenv").config();
const session = require('express-session');
const express = require("express");
const massive = require("massive");
const authCtrl = require('./authController')
const ctrl = require("./controller");
const cors = require("cors");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUniitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
});

// auth endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);

const PORT = 6060;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
