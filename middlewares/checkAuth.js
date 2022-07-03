import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send({
      status: 'fail',
      message: 'Authentication başarısız',
    });
  }
};
