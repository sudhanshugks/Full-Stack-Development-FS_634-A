// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { init } = require('./models/helpers');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

const app = express();
app.use(cors());
app.use(express.json());

init(); // create tables if not exist

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
