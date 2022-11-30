const express = require("express");
const UuTienXepHangController = require("../controllers/UuTienXepHangController");
const app = express.Router();

app.post("/uutienxephang/create", UuTienXepHangController.post_UuTienXepHang);
app.get(
  "/uutienxephang/getlist",
  UuTienXepHangController.get_list_UuTienXepHang
);
app.patch(
  "/uutienxephang/update/:id",
  UuTienXepHangController.update_UuTienXepHang
);
app.delete(
  "/uutienxephang/delete/:id",
  UuTienXepHangController.delete_UuTienXepHang
);

module.exports = app;
