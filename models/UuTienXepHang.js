const mongoose = require("mongoose");

const UuTienXepHangSchema = mongoose.Schema({
  UUTIEN1: {
    type: String,
    required: true,
  },
  UUTIEN2: {
    type: String,
    required: true,
  },
  UUTIEN3: {
    type: String,
    required: true,
  },
});

const UuTienXepHang = mongoose.model("UuTienXepHang", UuTienXepHangSchema);
module.exports = UuTienXepHang;
