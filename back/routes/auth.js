const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

router.get("/me", (req, res) => {
  if (req.user) return res.send(req.user);
  res.sendStatus(401).end();
});

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => res.status(201).send(user));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

module.exports = router;
