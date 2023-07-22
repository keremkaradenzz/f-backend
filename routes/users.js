var express = require('express');
var router = express.Router();
var { loginUser, postUsers } = require('../controllers/users.js')

/* GET home page. */
router.post("/login", loginUser);
router.post("/", postUsers);


module.exports = router;
