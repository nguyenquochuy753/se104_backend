const mongoose = require("mongoose");

const TranDauSchema = mongoose.Schema({
  NGAYDIENRA: {
    type: String,
    required: true,
  },
  THOIGIANDIENRA: {
    type: String,
    required: true,
  },
  MAMG: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MuaGiai",
    required: true,
  },
  DADAU: {
    type: Boolean,
    default: false,
  },
  DOI1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CauLacBo",
    required: true,
  },
  DOI2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CauLacBo",
    required: true,
  },
  VONGDAU: {
    type: Number,
    required: true,
  },
  LUOTDAU: {
    type: Number
  },
  SANVANDONG: {
    type: String,
    required: true
  },
});

const TranDau = mongoose.model("TranDau", TranDauSchema);
module.exports = TranDau;
