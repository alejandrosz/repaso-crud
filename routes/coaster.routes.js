const express = require("express");
const router = express.Router();
const Parks = require("../models/park.model");
const Coasters = require("../models/coaster.model");

// Aquí los endpoints

router.get("/new", (req, res) => {
  Parks.find()
    .then(parksFound => res.render("coasters/new-coaster", { parksFound }))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.post("/new", (req, res) => {
  console.log(req.body);
  Coasters.create({
    name: req.body.name,
    description: req.body.description,
    inversions: req.body.inversions,
    length: req.body.length,
    park: req.body.parkid
  }).then(() => {
    res.render("coasters/new-coaster");
  });
});

router.get("/", (req, res) => {
  Coasters.find()
    .populate("park")
    .then(coastersFound =>
      res.render("coasters/coasters-index", { coastersFound })
    )
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/", (req, res) => {
  Coasters.find()
    .populate("park")
    .then(coastersFound =>
      res.render("coasters/coasters-index", { coastersFound })
    )
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  let { id } = req.params;
  Coasters.findById(id)
    .populate("park")
    .then(coasterFound => res.render("coasters/coaster-details", coasterFound))
    // .then(celebrityFound => res.json(celebrityFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

router.get("/delete/:id", (req, res, next) => {
  let { id } = req.params;
  console.log(req.params);
  Coasters.findByIdAndDelete(id).then(() => {
    res.redirect("/coasters");
  });
});

router.get("/edit/:id", (req, res, next) => {
  let { id } = req.params;
  console.log(req.params);
  Coasters.findById(id)
    .populate("park")
    .then(coasterFound => res.render("coasters/coaster-edit", coasterFound))
    .catch(err => {
      console.error("Error connecting to mongo");
      next(err);
    });
});

// router.post("/delete?id", (req, res) => {
//   // let { id } = req.query;
//   console.log(req.query);
//   // Coasters.findByIdAndDelete(id).then(() => {
//   //   res.redirect("/");
//   // });
// });

// router.get("/delete?id=:id", (req, res) => {
//   // let { id } = req.query;
//   console.log(req.query);
//   Coasters.find()
//     .populate("park")
//     .then(coastersFound =>
//       res.render("coasters/coasters-index", { coastersFound })
//     );
// });
module.exports = router;
