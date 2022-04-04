require("dotenv").config();
const path = require("path");

const app = require("./src/app");
const PORT = process.env?.PORT ?? 8000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
