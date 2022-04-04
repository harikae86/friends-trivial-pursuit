const bcryptjs = require("bcryptjs");

const hash = (password) => {
  return bcryptjs.hash(password, 10);
};

const compare = (password, hashed) => {
  return bcryptjs.compare(password, hashed);
};

module.exports = { hash, compare };
