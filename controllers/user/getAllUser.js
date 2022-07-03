import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({
      status: 'success',
      results: users.length,
      users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});
