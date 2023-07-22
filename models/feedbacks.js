var mongoose = require("mongoose");

const feedbacksSchema = mongoose.Schema({
  appId: String,
  domain: String,
  feedback: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Feedbacks = mongoose.model("Feedbacks", feedbacksSchema);

module.exports = Feedbacks;
