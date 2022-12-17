const mongoose = require("mongoose");

const LoaiTheSchema = mongoose.Schema(
  {
    TEN: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LoaiThe = mongoose.model("LoaiThe", LoaiTheSchema);
module.exports = LoaiThe;
