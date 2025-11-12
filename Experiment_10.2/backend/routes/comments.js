// comments routes: /api/comments
const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// add comment
router.post('/:postId', auth, (req, res) => {
  const { body } = req.body;
  const postId = req.params.postId;
  const stmt = db.prepare('INSERT INTO comments (post_id, user_id, body) VALUES (?, ?, ?)');
  const info = stmt.run(postId, req.user.id, body);
  const comment = db.prepare('SELECT comments.*, users.username, users.display_name FROM comments JOIN users ON comments.user_id = users.id WHERE comments.id = ?').get(info.lastInsertRowid);
  res.json(comment);
});

// delete comment (owner)
router.delete('/:id', auth, (req, res) => {
  const comment = db.prepare('SELECT * FROM comments WHERE id = ?').get(req.params.id);
  if (!comment) return res.status(404).json({ error: 'Not found' });
  if (comment.user_id !== req.user.id) return res.status(403).json({ error: 'Forbidden' });
  db.prepare('DELETE FROM comments WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
