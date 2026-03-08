const mongoose = require("mongoose");
const schema = mongoose.Schema;

const account_schema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
    },
    skills: [String],
    locality: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

account_schema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};
const Accounts = mongoose.model("Account", account_schema);

module.exports = Accounts;
