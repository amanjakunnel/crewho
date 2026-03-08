const express = require("express");
const router = express.Router();
const {execPath} = require("process");

//app.use(cookiParser('124345-67890-09876-54321'));

router.get("/", (req, res, next) => {
  console.log(req.session);
  if (!req.session.user) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
      var err = new Error("You are not authenticated!");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
      return;
    }

    var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
      .toString()
      .split(":");

    var username = auth[0];
    var password = auth[1];

    if ((username === "admin", password === "password")) {
      req.session.user = "admin";
      console.log("admin given!!");
      res.type("html");
      res.send("you are admin now");
      return;
    } else {
      var err = new Error("You are not authenticated!");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
    }
  } else {
    if (req.session.user === "admin") {
      console.log("admin given!");
      res.type("html");
      res.send("you are admin now");
      next();
    } else {
      var err = new Error("You are not authenticated!");
      res.setHeader("WWW-Authenticate", "Basic");
      err.status = 401;
      next(err);
    }
  }
});

module.exports = router;
