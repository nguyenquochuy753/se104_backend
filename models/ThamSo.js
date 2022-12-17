const mongoose = require("mongoose");

const ThamSoSchema = mongoose.Schema({
  MAMG: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MuaGiai",
    required: true,
  },
  TENTHAMSO: {
    type: String,
    required: true,
  },
  GIATRITHAMSO: {
    type: Number,
    required: true,
  },
});

const ThamSo = mongoose.model("ThamSo", ThamSoSchema);
module.exports = ThamSo;
