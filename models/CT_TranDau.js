const mongoose = require("mongoose");

const CT_TranDauSchema = mongoose.Schema(
  {
    MATD: {
      type: Number,
      require: true,
    },
    SCORE_1: {
      type: Number,
      require: true,
      default: 0,
    },
    SCORE_2: {
      type: Number,
      require: true,
      default: 0,
    },
    CARD_1: {
      type: Number,
      require: true,
    },
    CARD_2: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const CT_TranDau = mongoose.model("CT_TranDau", CT_TranDauSchema);
module.exports = CT_TranDau;
