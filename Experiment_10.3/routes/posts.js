const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// create post
router.post('/', auth, upload.single('image'), async (req, res) => {
  const post = await Post.create({
    user: req.user._id,
    text: req.body.text,
    image: req.file ? req.file.filename : null
  });
  res.json(await post.populate('user', 'name username'));
});

// list feed
router.get('/', auth, async (req, res) => {
  const posts = await Post.find()
    .populate('user', 'name username')
    .sort({ createdAt: -1 });
  res.json(posts);
});

// like/unlike
router.post('/:id/like', auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  const index = post.likes.indexOf(req.user._id);
  if (index >= 0) post.likes.splice(index, 1);
  else post.likes.push(req.user._id);
  await post.save();
  res.json({ likes: post.likes.length });
});

module.exports = router;
