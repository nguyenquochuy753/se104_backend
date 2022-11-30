const mongoose = require("mongoose");

const TheSchema = mongoose.Schema(
  {
    MACT: {
      type: Number,
      require: true,
    },
    MACLB: {
      type: Number,
      require: true,
    },
    MACT_TD: {
      type: Number,
      require: true,
    },
    PHUTNHANTHE: {
      type: Number,
      require: true,
    },
    LOAITHE: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const The = mongoose.model("The", TheSchema);
module.exports = The;
