const User = require("../models/user-model");

const getUsers = async () => {
  try {
    return await User.find({});
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getUsers,
};
