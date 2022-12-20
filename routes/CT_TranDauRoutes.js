const express = require("express");
const CT_TranDauController = require("../controllers/CT_TranDauController");
const app = express.Router();

app.post("/create", CT_TranDauController.post_CT_TranDau);
app.get("/get/:id", CT_TranDauController.get_list_CT_TranDau);
app.get("/getlist", CT_TranDauController.get_list);
app.get("/getlistbyBXH", CT_TranDauController.getlistbyBXH);
app.patch("/update/:id", CT_TranDauController.update_CT_TranDau);
app.patch("/updateCARD_1/:id", CT_TranDauController.updateCARD_1);
app.patch("/updateCARD_2/:id", CT_TranDauController.updateCARD_2);
app.patch("/updateSCORE_1/:id", CT_TranDauController.updateSCORE_1);
app.patch("/updateSCORE_2/:id", CT_TranDauController.updateSCORE_2);
app.delete("/delete/:id", CT_TranDauController.delete_CT_TranDau);

module.exports = app;
