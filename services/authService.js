const { User } = require('../models');

const findUserByEmail = async ({ email }) => {
  const user = await User.findOne({ email });
  return user;
};

const registerNewUser = async ({ email, password, name, city, phone }) => {
  const newUser = new User({ email, password, name, city, phone });
  newUser.setPassword(password);
  await newUser.save();

  return { newUser };
};

module.exports = {
  findUserByEmail,
  registerNewUser,
};
