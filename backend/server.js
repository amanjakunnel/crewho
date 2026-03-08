const fs = require("fs");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const admin = require("./api/middleware/admin_auth");
const username_check = require("./api/middleware/username_check");
const routeRegister = require("./api/routes/account");
const models = require("./models/account_name");
const morgan = require("morgan");
const keys = require("./config/keys");

const app = express();
app.use(morgan("dev"));

app.use(express.json());
//app.use(cookiParser('124345-67890-09876-54321'));

app.use(
  session({
    name: "session-id",
    secret: keys.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new fileStore(),
  })
);

mongoose
  .connect(keys.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to database"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/users/", routeRegister);
app.use("/admin/", admin);
app.use("/user_check/", username_check);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected to ${PORT}`));
