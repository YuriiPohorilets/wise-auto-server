const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phone: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    birthday: {
      type: String,
      default: '01.01.1900',
    },
    avatarUrl: {
      type: String,
      default: null,
    },
    avatarId: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
    favorite: {
      type: [{ type: Schema.Types.ObjectId }],
      ref: 'notice',
      default: [],
    },
  },

  { versionKey: false, timestamps: true }
);

const User = model('user', userSchema);

module.exports = User;
