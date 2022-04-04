const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const initPassport = require("../config/passportConfig");
const auth = require("./auth");
const game = require("./game");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/database")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB NOT connected ", err));

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [String | Number],
});

const Question = mongoose.model("Question", questionSchema);

app.use(
  session({
    resave: false,
    secret: "asdasd",
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use("/api", auth);
app.use("/api", game);
app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

app.get("/", (req, res) => {
  User.find({}, (err, found) => {
    if (!err) {
      return res.send(found);
    }
    console.log(err);
    res.send({ message: "some error occured" });
  });
});

module.exports = app;
