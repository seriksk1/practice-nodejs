const UserService = require("../services/user-service");

const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  getUsers,
};
