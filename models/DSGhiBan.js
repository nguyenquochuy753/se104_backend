const mongoose = require("mongoose");

const DSGhiBanSchema = mongoose.Schema({
  MACT: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CauThu",
    required: true,
  },
  MACLB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CauLacBo",
    required: true,
  },
  SOBANTHANG: {
    type: Number,
  },
});

const DSGhiBan = mongoose.model("DSGhiBan", DSGhiBanSchema);
module.exports = DSGhiBan;
