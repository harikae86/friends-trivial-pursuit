const { Router } = require("express");
const verify = require("./verify");
const questions = require("../data");
const routes = Router();

routes.get("/game", (req, res) => {
  if (!req.session.currentQuestion) {
    req.session.currentQuestion = 0;
    req.session.goodAnswers = 0;
  }
  const current = questions[req.session.currentQuestion];
  if (!current) {
    return res.json({ good: req.session.goodAnswers });
  }

  const text = current.question;
  const answers = current.answers.map((item) => {
    return item.choice;
  });
  res.json({ text, answers });
});

routes.post("/game", (req, res) => {
  const answerIndex = req.body.answerIndex;
  const current = questions[req.session.currentQuestion];

  const answer = current.answers[answerIndex];

  if (answer.isAnswer === true) {
    req.session.goodAnswers += 1;
  }
  req.session.currentQuestion += 1;

  res.end();
});

routes.get("/result", (req, res) => {
  return res.json({ good: req.session.goodAnswers });
});

module.exports = routes;
