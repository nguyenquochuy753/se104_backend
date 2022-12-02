
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes')
const BangXepHangRoutes = require('./routes/bangXepHangRoutes')

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECT_URL, () => {
  console.log('DB CONNECTED')
})
app.use('/v1/auth', authRoutes)
app.use('/v1/bangxephang',BangXepHangRoutes)


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
