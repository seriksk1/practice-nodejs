const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
require("./db");

const app = express();
const port = process.env.PORT || 3003;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const userRouter = require("./routes/user-router");

app.use("/", userRouter);

app.listen(port, async () => {
  console.log(`Running on port ${port}`);
});
