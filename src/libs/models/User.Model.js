const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
      required: false,
      default: "/_next/static/media/profile.892b3632.svg",
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
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
        front:  "/_next/static/media/profile.892b3632.svg",
        back:  "/_next/static/media/profile.892b3632.svg",
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
