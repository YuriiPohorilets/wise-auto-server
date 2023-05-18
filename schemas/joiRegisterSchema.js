const Joi = require('joi').extend(require('@joi/date'));
const { emailPattern, namePattern, passwordPattern, phonePattern } = require('./patterns');

const joiRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).min(10).max(64).required(),
  password: Joi.string().pattern(passwordPattern).min(7).max(32).required(),
  name: Joi.string().pattern(namePattern).min(1).max(24).required(),
  phone: Joi.string().pattern(phonePattern).allow(null, ''),
  city: Joi.string().min(3).max(64).allow(null, ''),
});

module.exports = joiRegisterSchema;
