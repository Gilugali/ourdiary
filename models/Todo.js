const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  type:Date,
  default:Date
});

module.exports = new mongoose.model("Todo", TodoSchema);