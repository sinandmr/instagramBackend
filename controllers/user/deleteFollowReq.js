import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const { requestUser, currentUser } = req.body;
    const current = await User.findOne({
      username: currentUser,
    });

    if (!current) throw 'Kullanıcı bilgileri hatalı';

    if (!current.followReq.includes(requestUser))
      throw 'Takip isteği bulunmuyor';

    const itemIndex = current.followReq.indexOf(requestUser);

    // Takip isteğini sil
    current.followReq.splice(itemIndex, 1);

    await current.save();

    return res.status(200).json({
      status: 'success',
      message: 'Takip isteği silindi',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});
