const { hash } = require("../src/crypt");
const User = require("../models/user");
const passport = require("passport");
const Local = require("passport-local").Strategy;

const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(401).send("User does not exist.");
    else {
      req.logIn(user, async (err) => {
        if (err) throw err;
        const foundUser = await User.findOne({ email: req.body.email }).exec();

        if (!foundUser) {
          return;
        }

        const userDto = {
          email: foundUser.email,
        };
        res.json({ user: userDto });
      });
    }
  })(req, res, next);
};

const register = async (req, res, next) => {
  console.log(User);
  try {
    const hashedPassword = await hash(req.body.password);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(newUser);
    await newUser.save();
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = { register, login };
