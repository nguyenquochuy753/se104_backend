const mongoose = require("mongoose");

const ThamSoSchema = mongoose.Schema({
  TENTHAMSO: {
    type: String,
    require: true,
  },
  GIATRITHAMSO: {
    type: int,
    require: true,
  },
});

const ThamSo = mongoose.model("ThamSo", ThamSoSchema);
module.exports = ThamSo;
