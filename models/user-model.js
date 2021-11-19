const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model("users", User);
