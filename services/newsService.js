const { News } = require('../models');

const getAllNews = async (page, limit) => {
  const skip = (page - 1) * limit;

  const news = await News.find({}, '', {
    skip,
    limit: Number(limit),
  }).sort({ date: -1 });

  return news;
};

module.exports = {
  getAllNews,
};
