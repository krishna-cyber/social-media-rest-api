const mongoose = require("mongoose");

//creating user schema
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);

//exporting models to use in other files
module.exports = mongoose.model("Post", postSchema);
