const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createToken = async _id => {
  const { SECRET_KEY } = process.env;
  const payload = { id: _id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' });

  return token;
};

const findUserByEmail = async email => {
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
  createToken,
};
