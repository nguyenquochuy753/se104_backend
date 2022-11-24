const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRouter')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_CONNECT_URL, () => {
    console.log('DB Connected')
})

app.use('/v1/auth', authRoutes)

app.listen(8000, () => {
    console.log('Server running on port 8000')
})