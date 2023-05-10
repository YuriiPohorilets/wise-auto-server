const { Schema, model } = require('mongoose');
const makeList = require('../helpers/makeList');

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    bodyStyle: {
      type: String,
      enum: ['suv', 'wagon', 'hatchback', 'sedan', 'minivan', 'convertible', 'coupe', 'crossover'],
      required: [true, 'Body style is required'],
    },
    make: {
      type: String,
      enum: [...makeList],
      required: [true, 'Make is required'],
    },
    model: {
      type: String,
      required: [true, 'Model is required'],
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
    },
    type: {
      type: String,
      enum: ['new', 'used', 'all'],
      required: [true, 'Type is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    kilometrage: {
      type: Number,
      required: [true, 'Kilometrage is required'],
    },
    transmission: {
      type: String,
      enum: ['manual', 'automatic', 'tiptronic', 'robotic', 'variable'],
      required: [true, 'Transmission is required'],
    },
    fuelType: {
      type: String,
      enum: ['gasoline', 'diesel', 'gas', 'hybrid', 'electric'],
      required: [true, 'Fuel type is required'],
    },
    engine: {
      type: String,
      required: [true, 'Engine is required'],
    },
    vinCode: {
      type: String,
      default: null,
    },
    drivetrain: {
      type: String,
      enum: [
        'Front-Wheel Drive (FWD)',
        'Rear-Wheel Drive (RWD)',
        'Four-Wheel Drive (4WD)',
        'All-Wheel Drive (AWD)',
      ],
      required: [true, 'Drivetrain is required'],
    },
    color: {
      type: String,
      required: [true, 'Color is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    imgUrl: {
      type: String,
      required: [true, 'Image is required'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);

const Notice = model('notices', noticeSchema);

module.exports = Notice;
