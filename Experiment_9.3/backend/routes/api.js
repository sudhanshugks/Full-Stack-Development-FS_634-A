const express = require('express');
const router = express.Router();

// sample data endpoint
router.get('/hello', (req, res) => {
  res.json({ greeting: 'Hello from backend!', time: new Date().toISOString() });
});

module.exports = router;
