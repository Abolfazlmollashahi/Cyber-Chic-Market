const express = require("express");
const controller = require("./auth.controller");

const router = express.Router();

router
  .route("/register")
  .get(controller.showViewRegister)
  .post(controller.register);

module.exports = router;