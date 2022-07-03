export default (err, req, res, next) => {
  res.status(400).json({
    source: 'errorHandler.js',
    err,
  });
};
