const passport = require("passport");
const Local = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const { hash, compare } = require("../src/crypt");
const User = require("../models/user");

const init = (passport) => {
  const authenticate = (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, async (err, user) => {
      if (!user) return done(null, false);
      if (err) throw err;

      try {
        if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        throw error;
      }
    });
  };

  passport.use(new Local({ usernameField: "email" }, authenticate));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInfo = { name: user.name };
      done(err, userInfo);
    });
  });
};

module.exports = init;
