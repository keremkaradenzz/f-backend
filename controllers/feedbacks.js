var Feedbacks = require("../models/feedbacks.js");
var Users = require("../models/users.js");
const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedbacks.find(req.body);
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const postFeedback = async (req, res) => {
  const users = await Users.find({appId: req.body.appId});
  if (users?.length) {
    const newFeedback = new Feedbacks(req.body);
    try {
      await newFeedback.save();
      res.status(200).json({ status: true, data: newFeedback });
    } catch (err) {
      res.status(409).json({ status: false, message: err.message });
    }
  }else { 
    res.status(409).json({ status: false, message: 'AppId is invalid!' });
  }
};

module.exports = {
  postFeedback,
  getFeedbacks,
};
