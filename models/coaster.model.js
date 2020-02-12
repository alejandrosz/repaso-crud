const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Aquí el esquema
const SchameName = new Schema(
  {
    name: String,
    description: String,
    inversions: Number,
    length: Number,
    active: Boolean,
    park: { type: Schema.Types.ObjectId, ref: "Park" }
    // park: { type: mongoose.Schema.Types.ObjectId, ref: "Park" }
  }
  // {
  //   timestamps: true
  // }
);

// let Park  = mongoose.model('Park', eventSchema);
const Model = mongoose.model("Coaster", SchameName);
module.exports = Model;
