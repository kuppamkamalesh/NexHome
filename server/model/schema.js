const mongoose = require("mongoose");
const nexHomeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: Number, required: true },
  },
  {
    collection: "Login",
  }
);

module.exports = mongoose.model("nexHomeSchema", nexHomeSchema);
