const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Aquí el esquema
const SchameName = new Schema(
  {
    name: String,
    description: String,
    active: Boolean
  }
  // {
  //   timestamps: true
  // }
);

const Model = mongoose.model("Park", SchameName);
module.exports = Model;