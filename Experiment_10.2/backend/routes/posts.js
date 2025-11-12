// posts routes: /api/posts
const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// list posts
router.get('/', (req, res) => {
  const rows = db.prepare(`
    SELECT posts.*, users.username, users.display_name
    FROM posts JOIN users ON posts.user_id = users.id
    ORDER BY created_at DESC
  `).all();
  res.json(rows);
});

// get single post with comments
router.get('/:id', (req, res) => {
  const post = db.prepare('SELECT posts.*, users.username, users.display_name FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = ?').get(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  const comments = db.prepare(`
    SELECT comments.*, users.username, users.display_name
    FROM comments JOIN users ON comments.user_id = users.id
    WHERE post_id = ?
    ORDER BY created_at ASC
  `).all(req.params.id);
  res.json({ post, comments });
});

// create post
router.post('/', auth, (req, res) => {
  const { title, body } = req.body;
  const stmt = db.prepare('INSERT INTO posts (user_id, title, body) VALUES (?, ?, ?)');
  const info = stmt.run(req.user.id, title, body);
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(info.lastInsertRowid);
  res.json(post);
});

// delete post (only owner)
router.delete('/:id', auth, (req, res) => {
  const post = db.prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  if (post.user_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  db.prepare('DELETE FROM posts WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
