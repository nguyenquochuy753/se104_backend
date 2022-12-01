const express = require("express");
const TheController = require("../controllers/TheController");
const app = express.Router();

app.post("/the/create", TheController.post_The);
app.get("/the/getlist", TheController.get_list_The);
app.patch("/the/update/:id", TheController.update_The);
app.delete("/the/delete/:id", TheController.delete_The);

module.exports = app;
