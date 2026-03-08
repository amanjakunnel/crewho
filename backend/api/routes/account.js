const express = require("express");
const router = express.Router();
const assert = require("assert");
const Accounts = require("../../models/account_name");
const bcrypt = require("bcryptjs");
const {SIGALRM} = require("constants");
const jwt = require("jsonwebtoken");

router.route("/").all((req, res) => {
  res.status(403);
  res.contentType("html");
  res.send("operation not allowed");
});

router
  .route("/signup")
  .post(async (req, res, next) => {
    if (!req.body.name || !req.body.password || !req.body.email) {
      return res.status(400).json({msg: "bad request"});
    }

    const account = await Accounts.findOne({email: req.body.email});
    if (account) {
      throw new Error("Email Already Exists");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new Accounts({
        ...req.body,
        password: hashedPassword,
      });
      await newUser.save();
      res.send(newUser);
    }
  })
  .get(async (req, res) => {
    //res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    const accounts = await Accounts.find({});

    res.status(200).json(accounts);
  })
  .delete(async (req, res, next) => {
    console.log("start delete");
    const response = await Accounts.remove({});
    res.send(response);
  })
  .patch(async (req, res, next) => {
    const response = await Accounts.findOneAndUpdate(
      {email: req.body.email},
      {
        skills: req.body.skills,
        username: req.body.username,
        name: req.body.name,
      },
      {new: true}
    );
    res.send(response);
  });

router.route("/login").post(async (req, res, next) => {
  const user = await Accounts.findOne({email: req.body.email});
  if (!user) {
    res.status(400).send("User not Found");
  } else {
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      const token = jwt.sign(
        {
          email: user.email,
          userID: user._id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({
        message: "auth 1",
        token: token,
      });
    } else {
      res.status(401).json({
        message: "auth 0",
      });
    }
  }
});

router.get("/logout", (req, res, next) => {
  console.log(req.session);
  if (req.session.user) {
    req.session.destroy();
    res.clearCookie("session-id");
    res.redirect("/");
  } else {
    throw new Error("You are not logged in");
  }
});

router.get("/profile1", async (req, res, next) => {
  const decoded = jwt.decode(req.body.token);
  console.log(decoded.email);
  const user = await Accounts.findOne({email: decoded.email});
  res.status(200).json({name: user.name, email: user.email});
});

module.exports = router;
