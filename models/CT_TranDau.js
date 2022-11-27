const mongoose = require("mongoose");

const CT_TranDauSchema = mongoose.Schema(
  {
    MATD: {
      type: int,
      require: true,
    },
    SCORE_1: {
      type: int,
      require: true,
      default: 0,
    },
    SCORE_2: {
      type: int,
      require: true,
      default: 0,
    },
    CARD_1: {
      type: int,
      require: true,
    },
    CARD_2: {
      type: int,
      require: true,
    },
  },
  { timestamps: true }
);

const CT_TranDau = mongoose.model("CT_TranDau", CT_TranDauSchema);
module.exports = CT_TranDau;
