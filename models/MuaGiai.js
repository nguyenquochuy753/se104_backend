const mongoose = require('mongoose')

const MuaGiaiSchema = mongoose.Schema({
    TENMUAGIAI: {
        type: String,
        required: true
    },
    SL_CLB: {
        type: int,
        required: true
    },
    LOGO: {
        data: Buffer,
        contentType: String,
        required: true
    }
}, { timestamps: true })

const MuaGiai = mongoose.model('MuaGiai', MuaGiaiSchema)
module.exports = MuaGiai