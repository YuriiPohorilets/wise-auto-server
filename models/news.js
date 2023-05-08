const { Schema, model } = require('mongoose');

const newsSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
  },

  { versionKey: false, timestamps: true }
);

const News = model('news', newsSchema);

module.exports = News;
