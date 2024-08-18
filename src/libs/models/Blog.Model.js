const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
},{ timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;
