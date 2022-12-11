const mongoose = require('mongoose')

const MuaGiaiSchema = mongoose.Schema({
    TENMUAGIAI: {
        type: String,
        required: true,
        unique: true
    },
    SL_CLB: {
        type: Number,
        required: true
    },
    LOGO: {
        type: String,
        required: true
    }
}, { timestamps: true })

const MuaGiai = mongoose.model('MuaGiai', MuaGiaiSchema)
module.exports = MuaGiai