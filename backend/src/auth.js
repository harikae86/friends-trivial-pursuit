const passport = require("passport");
const { Router } = require("express");
const { hash } = require("./crypt");
const verify = require("./verify");
const routes = Router();
const auth = require("../controllers/authController");

routes.post("/register", auth.register);
routes.post("/login", auth.login);

module.exports = routes;
