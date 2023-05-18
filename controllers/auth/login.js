const asyncHandler = require('express-async-handler');
const { joiLoginSchema } = require('../../schemas');
const { findUserByEmail, loginUser, createToken } = require('../../services/authService');

const login = asyncHandler(async (req, res) => {
  const { error } = joiLoginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({ message: 'Email or password is wrong' });
  }

  const token = await createToken(user);
  await loginUser(user, token);

  res.status(200).json({
    status: 'success',
    code: 200,
    token,
    result: {
      user: {
        email,
      },
    },
  });
});

module.exports = login;
