import Post from '../../models/Post.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const { username } = req.body;

    const posts = await Post.find({
      username,
    });

    res.status(201).json({
      status: 'success',
      results: posts.length,
      posts,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});
