const Joi = require('joi').extend(require('@joi/date'));
const makeList = require('../helpers/makeList');

const joiNoticeSchema = Joi.object({
  title: Joi.string().min(2).max(48).required(),
  price: Joi.number().required(),
  bodyStyle: Joi.string()
    .valid('suv', 'wagon', 'hatchback', 'sedan', 'minivan', 'convertible', 'coupe', 'crossover')
    .required(),
  make: Joi.string()
    .valid(...makeList)
    .required(),
  model: Joi.string().min(2).required(),
  year: Joi.date().format(['YYYY']).utc().allow(null, '').required(),
  type: Joi.string().valid('new', 'used', 'all').required(),
  location: Joi.string().min(3).max(64).required(),
  kilometrage: Joi.number().positive().allow(0).max().required(),
  transmission: Joi.string()
    .valid('manual', 'automatic', 'tiptronic', 'robotic', 'variable')
    .required(),
  fuelType: Joi.string().valid('gasoline', 'diesel', 'gas', 'hybrid', 'electric').required(),
  engine: Joi.string().min(3).max(32).required(),
  vinCode: Joi.string().min(17).max(17),
  drivetrain: Joi.string()
    .valid(
      'Front-Wheel Drive (FWD)',
      'Rear-Wheel Drive (RWD)',
      'Four-Wheel Drive (4WD)',
      'All-Wheel Drive (AWD)'
    )
    .required(),
  color: Joi.string().min(3).max(64).required(),
  description: Joi.string().min(15).max(450).required(),
  imgUrl: Joi.string().required(),
});

module.exports = joiNoticeSchema;
