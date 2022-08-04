import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';
import bcrypt from 'bcrypt';
import transport from './nodemailer.js';

export default asyncHandler(async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!email || !username) throw 'Kullanıcı adı ve mail adresi gerekli';

    if (!transport) throw 'Mail sunucusuna bağlanılamadı';

    const user = await User.findOne({
      username,
      email,
    });

    if (!user) throw 'Kullanıcı adı ile Mail adresi uyuşmuyor';

    // Generate Confirmation Code (6 digit)
    const min = 100000;
    const max = 999999;
    const confirmationCode = Math.floor(Math.random() * (max - min + 1)) + min;

    user.confirmationCode = confirmationCode;
    await user.save();

    const mailOptions = {
      from: 'hi@sdmr.dev', // Sender address
      to: email, // List of recipients
      subject: 'Doğrulama Kodu', // Subject line
      text: `Şifrenizi değiştirmek için doğrulama kodunuz: ${confirmationCode}`,
    };

    transport.sendMail(mailOptions, function (err, info) {
      if (err) throw err;

      return res.status(200).json({
        status: 'success',
        message: 'Doğrulama kodu gönderildi',
      });
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});
