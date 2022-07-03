import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default asyncHandler(async (req, res) => {
  try {
    const { username, pass } = req.body;
    if (!username || !pass) {
      return res.status(400).json({
        status: 'fail',
        message: 'Kullanıcı Adı ve Şifre boş olmamalıdır.',
      });
    }

    const user = await User.findOne({
      username,
    });

    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Kullanıcı bulunamadı.',
      });
    }

    const isMatch = await bcrypt.compare(pass.toString(), user.password);

    if (isMatch) {
      const token = jwt.sign(
        {
          uid: user._id,
          username: user.username,
          email: user.email,
          name: user.name,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1h',
        }
      );
      return res.status(400).json({
        status: 'success',
        message: 'Giriş yapıldı',
        token,
      });
    } else {
      return res.status(403).json({
        status: 'fail',
        message: 'Şifre Yanlış',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});
