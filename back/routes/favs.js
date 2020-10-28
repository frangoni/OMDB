const express = require("express");
const router = express.Router();
const Fav = require("../models/favourite");
const User = require("../models/user");

router.post("/", (req, res) => {
  const { imdbId, title, poster, genre } = req.body;
  Fav.findOrCreate({
    where: { imdbId, userId: req.user.id },
    defaults: { title, poster, genre },
  })
    .then((fav, created) => {
      if (!created) return res.sendStatus(201);
      User.findOne({
        where: {
          email: req.user.email,
        },
      }).then((user) => user.addFavourite(fav));
    })
    .then(() => res.sendStatus(201));
});

router.get("/", (req, res) => {
  Fav.findAll({ where: { userId: req.user.id } }).then((favs) =>
    res.send(favs)
  );
});

router.delete("/", (req, res) => {
  Fav.destroy(req.body)
    .then((fav) => {
      User.findOne({
        where: {
          name: req.user.name,
        },
      }).then((user) => user.removeFavourite(fav));
    })
    .then(() => res.sendStatus(301));
});

module.exports = router;
