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
      required: false,
    },
    role: {
      type: String,
      required: false,
      default: "user",
    },
    nationalID: {
      type: Object,
      required: false,
      default: {
        front: "",
        back: "",
      },
      front: {
        type: String,
        required: false,
      },
      back: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
