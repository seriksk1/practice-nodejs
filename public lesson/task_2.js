const express = require("express");
const app = express();

const users = [
  {
    name: "Bessmertnykh",
    age: "18",
  },
  {
    name: "Skorin",
    age: "19",
  },
];

const port = 3002;

app.get("/", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log("Server running on port:", port);
});
