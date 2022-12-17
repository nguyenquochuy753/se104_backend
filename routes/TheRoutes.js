const express = require("express");
const TheController = require("../controllers/TheController");
const app = express.Router();

app.post("/create", TheController.post_The);
app.get("/getlist", TheController.get_list_The);
app.get("/getTheByCT_TD/:idCT_TD", TheController.getTheByCT_TD);
app.patch("/update/:id", TheController.update_The);
app.delete("/delete/:id", TheController.delete_The);

module.exports = app;
