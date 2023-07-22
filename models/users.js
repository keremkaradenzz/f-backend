var mongoose = require("mongoose");

const setDate = () => {
  const aYearFromNow = new Date();
  aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);
  return aYearFromNow;
};

const UsersSchema = mongoose.Schema({
  email: String,
  password: String,
  isOwner: Boolean,
  appId: String,
  expiresDate: {
    type: Date,
    default: setDate(),
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
