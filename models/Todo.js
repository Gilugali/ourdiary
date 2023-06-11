
 

const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  date:Date,
});

module.exports = new mongoose.model("Todo", TodoSchema);