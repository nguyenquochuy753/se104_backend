const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes')
const BangXepHangRoutes = require('./routes/bangXepHangRoutes')
const TranDauRoutes = require('./routes/tranDauRoutes')
const LoaiBanThangRoutes = require('./routes/loaiBanThangRoutes')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_CONNECT_URL, () => {
    console.log('DB Connected')
})

app.use('/v1/auth', authRoutes)
app.use('/v1/bangxephang',BangXepHangRoutes)
app.use('/v1/trandau',TranDauRoutes)
app.use('/v1/loaibanthang',LoaiBanThangRoutes)


app.listen(8000, () => {
    console.log('Server running on port 8000')
})