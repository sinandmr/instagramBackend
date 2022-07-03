import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const { requestUser, currentUser } = req.body;
    const request = await User.findOne({ username: requestUser });
    const current = await User.findOne({
      username: currentUser,
    });

    if (!current || !request) throw 'Kullanıcı bilgileri hatalı';

    if (!current.followReq.includes(requestUser))
      throw 'Takip isteği bulunmuyor';

    const itemIndex = current.followReq.indexOf(requestUser);

    // Takipçilere ekle
    current.followReq.splice(itemIndex, 1);
    current.followers.push(requestUser);

    // Takip edilenlere ekle
    request.following.push(currentUser);
    await request.save();
    await current.save();

    return res.status(200).json({
      status: 'success',
      message: 'Takip isteği kabul edildi',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});
