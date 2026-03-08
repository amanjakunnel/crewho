const express = require("express");
const router = express.Router();
const assert = require("assert");
const Accounts = require("../../models/account_name");
const {readSync} = require("fs");

router.post("/", async (req, res, next) => {
  const user = await Accounts.findOne({username: req.body.username});
  if (user) {
    return res.status(400).send("Username in use");
  }

  next();
});

module.exports = router;
