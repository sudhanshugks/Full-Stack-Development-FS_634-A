const express = require('express');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/:postId', auth, async (req, res) => {
  const comment = await Comment.create({
    post: req.params.postId,
    user: req.user._id,
    text: req.body.text
  });
  res.json(await comment.populate('user', 'name username'));
});

router.get('/:postId', async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate('user', 'name username');
  res.json(comments);
});

module.exports = router;
