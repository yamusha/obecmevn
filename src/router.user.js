const router = require("express").Router();
const jwt = require('jsonwebtoken')
const User = require("./model.user");
const secret = require("./secret")

const auth = require('./middleware.auth')
const admin = require('./middleware.admin')

router.get("/", auth, admin, async (req, res) => {
  try {
    const query = req.query["role"]
      ? { role: req.query["role"].toLocaleUpperCase() }
      : {};
    const users = await User.find(query);
    res.json(users);
  } catch (e) {
    res.status(500);
  }
});
router.post("/register", async (req, res) => {
  try {
    const c = req.body;
    const user = await User.create(c);

    res.json({ user: user });
  } catch (e) {
    res.status(500);
  }
});
router.post("/login", async (req, res) => {
  try {
    const u = req.body;
    const select = {username:1, password:1, role:1}
    // const user = await User.find({username: c.username, password: c.password})
    const user = await User.findOne({ username: u.username }, select);
    
    if (user && user.verifyPassword(u.password)) {
      const payload = {username: user.username, role: user.role}
      const token = jwt.sign(payload, secret, {expiresIn: 60 * 1000})
      res.json({
        token: token,
      });
    } else {
      res.status(401).json({message: 'invalid username or password'});
    }
  } catch (e) {
    res.status(500);
  }
});

module.exports = router;
