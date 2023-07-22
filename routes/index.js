var express = require('express');
var router = express.Router();
var { getFeedbacks, postFeedback } = require('../controllers/feedbacks.js')

/* GET home page. */
router.post("/list", getFeedbacks);
router.post("/", postFeedback);


module.exports = router;
