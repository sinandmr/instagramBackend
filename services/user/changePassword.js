import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';
import bcrypt from 'bcrypt';

export default asyncHandler(async (req, res) => {
  try {
    const { username, password, confirmCode } = req.body;

    if (!username || !password || !confirmCode) throw 'Bilgiler eksik';

    const user = await User.findOne({ username });

    if (user.confirmationCode !== confirmCode) throw 'Doğrulama kodu yanlış';

    // Password Hashing
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(password.toString(), saltRounds);
    // DB Save
    user.password = hashPass;
    await user.save();

    return res.status(200).json({
      status: 'success',
      message: 'Şifreniz değiştirildi',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});
