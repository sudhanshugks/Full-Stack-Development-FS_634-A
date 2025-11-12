const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// simple health route
app.get('/', (req, res) => res.json({ status: 'ok', message: 'Backend is running' }));

// API routes under /api
app.use('/api', apiRouter);

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
