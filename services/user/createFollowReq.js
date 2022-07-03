import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const { senderUsername, receiverUsername } = req.body;

    if (senderUsername !== req.userData.username) throw 'Yetkisiz İşlem';

    if (senderUsername === receiverUsername)
      throw 'Kendi hesabınızı takip edemezsiniz.';

    const receiver = await User.findOne({
      username: receiverUsername,
    });

    if (!receiver) throw 'Kullanıcı Bilgileri Hatalı';

    if (receiver.followReq.includes(senderUsername))
      throw 'Takip isteği mevcut';

    if (receiver.followers.includes(senderUsername))
      throw 'Zaten takip ediliyor';

    receiver.followReq = [...receiver.followReq, senderUsername];
    await receiver.save();

    res.status(400).json({
      status: 'success',
      message: 'Takip isteği gönderildi',
      aa: req.userData,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});
