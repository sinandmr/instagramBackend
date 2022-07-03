import Post from '../../models/Post.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const { username } = req.body;

    if (username !== req.userData.username) throw 'Yetkisiz işlem';

    const post = await Post.create(req.body);

    if (!post) throw 'Gönderi paylaşılamadı.';

    res.status(201).json({
      status: 'success',
      message: 'Gönderi paylaşıldı',
      post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});
