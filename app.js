const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const connectDb = require('./db/connection');

const authRoutes = require('./routes/api/auth');
const newsRoutes = require('./routes/api/news');
const noticesRoutes = require('./routes/api/notices');
const servicesRoutes = require('./routes/api/services');

const configPath = path.join(__dirname, '.env');
require('dotenv').config({
  path: configPath,
});

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/notices', noticesRoutes);
app.use('/api/services', servicesRoutes);

connectDb();

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
