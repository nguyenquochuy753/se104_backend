const mongoose = require("mongoose");

const LoaiBanThangSchema = mongoose.Schema({
  TEN: {
    type: String,
    required: true,
  },
});

const LoaiBanThang = mongoose.model("LoaiBanThang", LoaiBanThangSchema);
module.exports = LoaiBanThang;
