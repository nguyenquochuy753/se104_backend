const express = require("express");
const ThamSoController = require("../controllers/ThamSoController");
const app = express.Router();

app.post("/thamso/create", ThamSoController.post_ThamSo);
app.get("/thamso/getlist", ThamSoController.get_list_ThamSo);
app.patch("/thamso/update/:id", ThamSoController.update_ThamSo);
app.delete("/thamso/delete/:id", ThamSoController.delete_ThamSo);

module.exports = app;
