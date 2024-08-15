const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
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
  location: {
    type: Object,
    require: true,
  },
  date: {
    type: Date,
    require: true,
    default: new Date(),
  },
});

const Visitor =
  mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
