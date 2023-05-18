const asyncHandler = require('express-async-handler');
const { getAllNews } = require('../../services/newsService');

const getNews = asyncHandler(async (req, res) => {
  const { page = 1, limit = 6 } = req.query;

  const news = await getAllNews(page, limit);

  res.json({
    status: 'success',
    code: 200,
    totalHits: 3,
    result: [...news],
  });
});

module.exports = getNews;
