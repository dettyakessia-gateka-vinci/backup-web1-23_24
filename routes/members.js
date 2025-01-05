const express = require('express');
const router = express.Router();

const User = require('../models/User.js');

router.get('/', (req, res, next) => {
    console.log("MEMBER INDEX");
    console.log("session variable : " + JSON.stringify(req.session));
    manageSession(req, res);
});

module.exports = router;

function manageSession(req, res) {
    if (req.session.login) {
        manageSessionTrue(req, res);
    }
    else {
        res.redirect('/users');
    }
}
