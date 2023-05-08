const express = require('express');
const router = express.Router();
// const { notices: ctrl } = require('../../controllers');

router.get('/', (req, res) => {
  console.log('All notice route');
});

router.get('/notice/:noticeId', (req, res) => {
  console.log('News route');
});

router.get('/favorites', (req, res) => {
  console.log('News route');
});

router.get('/own', (req, res) => {
  console.log('News route');
});

router.delete('/:noticeId', (req, res) => {
  console.log('News route');
});

router.patch('/:noticeId', (req, res) => {
  console.log('News route');
});

router.post('/notice', (req, res) => {
  console.log('News route');
});

module.exports = router;
