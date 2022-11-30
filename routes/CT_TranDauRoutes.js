const express = require("express");
const CT_TranDauController = require("../controllers/CT_TranDauController");
const app = express.Router();

app.post("/ct_trandau/create", CT_TranDauController.post_CT_TranDau);
app.get(
  "/ct_trandau/getlistct_trandau",
  CT_TranDauController.get_list_CT_TranDau
);
app.patch("/ct_trandau/update/:id", CT_TranDauController.update_CT_TranDau);
app.delete("/ct_trandau/delete/:id", CT_TranDauController.delete_CT_TranDau);

module.exports = app;
