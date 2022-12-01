
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRouter')
const BangXepHangRoutes = require('./routes/bangXepHangRoutes')
const MuaGiaiRoutes = require('./routes/MuaGiaiRouter')
const CauLacBoRoutes = require('./routes/CauLacBoRouter')
const HuanLuyenVienRoutes = require('./routes/HuanLuyenVienRouter')
const LoaiTheRoutes = require('./routes/LoaiTheRouter')
const CT_TranDauRoutes = require("./routes/CT_TranDauRoutes");
const TheRoutes = require("./routes/TheRoutes");
const ThamSoRoutes = require("./routes/ThamSoRoutes");
const UuTienXepHangRoutes = require("./routes/UuTienXepHangRoutes");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECT_URL, () => {

  console.log("DB Connected");
});


app.use("/v1/auth", authRoutes);
app.use("/v1/bangxephang", BangXepHangRoutes);
app.use('/v1/muagiai', MuaGiaiRoutes)
app.use('/v1/caulacbo', CauLacBoRoutes)
app.use('/v1/huanluyenvien', HuanLuyenVienRoutes)
app.use('/v1/loaithe', LoaiTheRoutes)
app.use(CT_TranDauRoutes);
app.use(TheRoutes);
app.use(ThamSoRoutes);
app.use(UuTienXepHangRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
