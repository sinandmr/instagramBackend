import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';
import bcrypt from 'bcrypt';

export default asyncHandler(async (req, res) => {
  try {
    let { password } = req.body;
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(password.toString(), saltRounds);
    const newUser = await User.create({
      ...req.body,
      password: hashPass,
    });
    res.status(201).json({
      status: 'success',
      message: 'User created',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});
