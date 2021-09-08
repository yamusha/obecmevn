
module.exports = (req, res, next) => {
  if (res.locals.role !== "A") {
    res.status(401).end();
    return;
  }
  next();  
};
