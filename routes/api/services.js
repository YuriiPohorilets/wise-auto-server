const express = require('express');
const router = express.Router();
// const { news: ctrl } = require('../../controllers');

router.get('/', (req, res) => {
  console.log('Services route');
});

module.exports = router;
