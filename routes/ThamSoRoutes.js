const express = require("express");
const ThamSoController = require("../controllers/ThamSoController");
const app = express.Router();

app.post("/create/:idMG", ThamSoController.post_ThamSo);
app.get("/getlist/:idMG", ThamSoController.get_list_ThamSo);
app.patch("/update/:id", ThamSoController.update_ThamSo);
app.delete("/delete/:id", ThamSoController.delete_ThamSo);

module.exports = app;
