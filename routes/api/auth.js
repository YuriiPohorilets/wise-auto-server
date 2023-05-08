const express = require('express');
const router = express.Router();
// const { auth: ctrl } = require('../../controllers');

router.post('/signup', (req, res) => {
  console.log('Signup route');
});

router.post('/login', (req, res) => {
  console.log('Login route');
});

router.get('/logout', (req, res) => {
  console.log('Logout route');
});

router.patch('/update', (req, res) => {
  console.log('Update route');
});

router.get('/refresh', (req, res) => {
  console.log('Refresh route');
});

module.exports = router;
