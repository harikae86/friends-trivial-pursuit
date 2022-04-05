const { Router } = require("express");
const verify = require("./verify");
const routes = Router();
const auth = require("../controllers/authController");

routes.post("/register", auth.register);
routes.post("/login", auth.login);

routes.get("/profile", verify, (req, res, next) => {
  res.json(req.user);
});

module.exports = routes;
