const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: false,
  },
  phone: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  message: {
    type: String,
    require: false,
  },
  date: {
    type: Date,
    require: true,
    default: new Date(),
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

module.exports = Contact;
