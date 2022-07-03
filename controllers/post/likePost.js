import Post from '../../models/Post.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const { username, postID } = req.body;

    if (username !== req.userData.username) throw 'Yetkisiz işlem';

    const post = await Post.findOne({
      _id: postID,
    });

    if (!post) throw 'Gönderi bulunamadı';

    ++post.numberOfLike;

    await post.save();

    res.status(201).json({
      status: 'success',
      message: 'Gönderi beğenildi',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});
