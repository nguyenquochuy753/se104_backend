const mongoose = require("mongoose");

const TheSchema = mongoose.Schema(
  {
    MACT: {
      type: int,
      require: true,
    },
    MACLB: {
      type: int,
      require: true,
    },
    MACT_TD: {
      type: int,
      require: true,
    },
    PHUTNHANTHE: {
      type: int,
      require: true,
    },
    LOAITHE: {
      type: int,
      require: true,
    },
  },
  { timestamps: true }
);

const The = mongoose.model("The", TheSchema);
module.exports = The;
