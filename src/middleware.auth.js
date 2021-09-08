const jwt = require("jsonwebtoken");
const secret = require("./secret");

module.exports = (req, res, next) => {
  if (!req.headers["authorization"]) {
    res.status(401).end();
    return;
  }
  try {
    const token = req.headers["authorization"].replace(/bearer /i, "");
    const payload = jwt.verify(token, secret);
    // console.log(payload);
    res.locals.username = payload.username
    res.locals.role = payload.role
    next();
  } catch (error) {
    res.status(403).end();
  }
};
