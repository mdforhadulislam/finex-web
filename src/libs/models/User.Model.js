const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      required: false,
      default: "/profile.svg",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    nationalID: {
      type: Array,
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
