const mongoose = require("mongoose");

const TheSchema = mongoose.Schema(
  {
    MACT: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CauThu',
      required: true,
    },
    MACLB: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CauLacBo',
      required: true,
    },
    MACT_TD: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CT_TranDau',
      required: true,
    },
    PHUTNHANTHE: {
      type: Number,
      required: true,
    },
    LOAITHE: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const The = mongoose.model("The", TheSchema);
module.exports = The;
