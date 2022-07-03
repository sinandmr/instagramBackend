import User from '../../models/User.js';
import asyncHandler from '../../utils/asyncHandler.js';

export default asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
});
