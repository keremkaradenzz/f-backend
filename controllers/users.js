var Users = require("../models/users.js");

const loginUser = async (req, res) => {
  try {
    console.log('req', req.body)
    const users = await Users.find(req.body);
    console.log('users', users);
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const postUsers = async (req, res) => {
  const newUsers = new Users(req.body);
  try {
    await newUsers.save();
    res.status(200).json({status:true, data: newUsers});
  } catch (err) {
    res.status(409).json({ status:false, message: err.message });
  }
};


module.exports = { 
    postUsers,
    loginUser,
}