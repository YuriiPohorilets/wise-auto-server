const asyncHandler = require('express-async-handler');
const { joiRegisterSchema } = require('../../schemas');
const { findUserByEmail, registerNewUser, createToken } = require('../../services/authService');

const register = asyncHandler(async (req, res) => {
  const { error } = joiRegisterSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { email, password, name, city, phone } = req.body;
  const user = await findUserByEmail(email);

  if (user) {
    return res.status(409).json({ message: `User with ${email} already exist ` });
  }

  const { _id } = await registerNewUser({ email, password, name, city, phone });
  const token = await createToken(_id);

  res.status(201).json({
    status: 'success',
    code: 201,
    token,
    result: {
      user: {
        email,
        name,
      },
    },
  });
});

module.exports = register;
