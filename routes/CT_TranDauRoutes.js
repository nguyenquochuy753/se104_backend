const express = require("express");
const CT_TranDauController = require("../controllers/CT_TranDauController");
const app = express.Router();

app.post("/create", CT_TranDauController.post_CT_TranDau);
app.get("/get/:id", CT_TranDauController.get_list_CT_TranDau);
app.patch("/update/:id", CT_TranDauController.update_CT_TranDau);
app.delete("/delete/:id", CT_TranDauController.delete_CT_TranDau);

module.exports = app;
