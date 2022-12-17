const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const BangXepHangRoutes = require("./routes/bangXepHangRoutes");
const LoaiBanThangRoutes = require("./routes/loaiBanThangRoutes");
const MuaGiaiRoutes = require("./routes/MuaGiaiRouter");
const CauLacBoRoutes = require("./routes/CauLacBoRouter");
const HuanLuyenVienRoutes = require("./routes/HuanLuyenVienRouter");
const LoaiTheRoutes = require("./routes/LoaiTheRouter");
const CT_TranDauRoutes = require("./routes/CT_TranDauRoutes");
const TheRoutes = require("./routes/TheRoutes");
const ThamSoRoutes = require("./routes/ThamSoRoutes");
const UuTienXepHangRoutes = require("./routes/UuTienXepHangRoutes");
const TranDauRoutes = require("./routes/tranDauRoutes");
const CauThuRoutes = require("./routes/CauThuRouter");
const BanThangRoutes = require("./routes/BanThangRouter");
const DSNhanTheRoutes = require("./routes/DSNhanTheRouter");
const DSGhiBanRoutes = require("./routes/DSGhiBanRouter");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_CONNECT_URL, () => {
  console.log("DB CONNECTED");
});


app.use("/v1/auth", authRoutes);
app.use("/v1/bangxephang", BangXepHangRoutes);
app.use("/v1/loaibanthang", LoaiBanThangRoutes);
app.use("/v1/trandau", TranDauRoutes);
app.use("/v1/muagiai", MuaGiaiRoutes);
app.use("/v1/caulacbo", CauLacBoRoutes);
app.use("/v1/huanluyenvien", HuanLuyenVienRoutes);
app.use("/v1/loaithe", LoaiTheRoutes);
app.use("/v1/ct_trandau", CT_TranDauRoutes);
app.use("/v1/the", TheRoutes);
app.use("/v1/thamso", ThamSoRoutes);
app.use("/v1/uutienxephang", UuTienXepHangRoutes);
app.use("/v1/cauthu", CauThuRoutes);
app.use("/v1/banthang", BanThangRoutes);
app.use("/v1/dsghiban", DSGhiBanRoutes);
app.use("/v1/dsnhanthe", DSNhanTheRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
