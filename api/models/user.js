const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  slug: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
