export default (err, req, res, next) => {
  res.status(400).json({
    status: 'fail',
    message: err,
    source: 'errorHandler.js',
  });
};
