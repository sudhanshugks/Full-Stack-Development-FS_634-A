// auth middleware - verifies JWT, attaches user
const jwt = require('jsonwebtoken');
const db = require('../db');
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Missing authorization header' });
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // fetch user minimal info
    const row = db.prepare('SELECT id, username, display_name FROM users WHERE id = ?').get(payload.id);
    if (!row) return res.status(401).json({ error: 'User not found' });
    req.user = row;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = auth;
