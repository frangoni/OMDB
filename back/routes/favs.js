const express = require('express');
const router = express.Router();
const Fav = require('../models/favourite');
const User = require('../models/user');

router.post('/', (req, res) => {
  const { imdbId, title, poster, genre } = req.body;
  Fav.findCreateFind({
    where: { imdbId, userId: req.user.id },
    defaults: { title, poster, genre },
  }).then((fav) => {
    User.findOne({
      where: {
        email: req.user.email,
      },
    }).then(() => res.sendStatus(201));
  });
});

router.get('/', (req, res) => {
  Fav.findAll({ where: { userId: req.user.id } }).then((favs) => res.send(favs));
});

router.delete('/', (req, res) => {
  const { imdbId, userId } = req.body;
  Fav.destroy({ where: { imdbId, userId } })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
