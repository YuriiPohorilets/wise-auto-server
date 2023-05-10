const { Schema, model } = require('mongoose');

const serviceSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    address: {
      type: String,
      default: null,
    },
    imageUrl: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    schedule: [
      {
        isOpen: Boolean,
        from: String,
        to: String,
      },
    ],
  },

  { versionKey: false, timestamps: true }
);

const Service = model('services', serviceSchema);

module.exports = Service;
