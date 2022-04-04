const verify = (req, res, next) => {
  if (!req.user) {
    return res.status(403).end();
  }
  next();
};

module.exports = verify;
