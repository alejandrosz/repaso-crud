const express = require("express");
const router = express.Router();
const Parks = require("../models/park.model");

router.get("/new", (req, res) => {
  res.render("parks/new-park");
});

router.post("/new", (req, res) => {
  console.log(req.body);
  Parks.create({
    name: req.body.name,
    description: req.body.description,
    active: req.body.active
  }).then(() => {
    res.render("parks/new-park");
  });
});

// .then(() => {
//   Places.find()
// .then(() => res.render("parks/new-park"));

// Aquí los endpoints

module.exports = router;
