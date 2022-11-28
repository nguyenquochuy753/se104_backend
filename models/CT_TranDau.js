const mongoose = require("mongoose");

const CT_TranDauSchema = mongoose.Schema(
  {
    MATD: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'TranDau',
      required: true,
    },
    SCORE_1: {
      type: Number,
      default: 0,
    },
    SCORE_2: {
      type: Number,
      default: 0,
    },
    CARD_1: {
      type: Number,
      required: true,
    },
    CARD_2: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const CT_TranDau = mongoose.model("CT_TranDau", CT_TranDauSchema);
module.exports = CT_TranDau;
