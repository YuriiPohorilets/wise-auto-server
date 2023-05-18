const Joi = require('joi');
const { emailPattern, passwordPattern } = require('./patterns');

const joiLoginSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).min(5).max(64).required(),
  password: Joi.string().pattern(passwordPattern).min(6).max(32).required(),
});

module.exports = joiLoginSchema;
