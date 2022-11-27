const mongoose = require("mongoose");

const UuTienXepHangSchema = mongoose.Schema({
  UUTIEN1: {
    type: String,
    require: true,
  },
  UUTIEN2: {
    type: String,
    require: true,
  },
  UUTIEN3: {
    type: String,
    require: true,
  },
});

const UuTienXepHang = mongoose.model("UuTienXepHang", UuTienXepHangSchema);
module.exports = UuTienXepHang;
