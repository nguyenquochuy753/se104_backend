const mongoose = require('mongoose')

const LoaiTheSchema = mongoose.Schema({
    TENTHE: {
        type: String,
        required: true
    }
}, { timestamps: true })

const LoaiThe = mongoose.model('LoaiThe', LoaiTheSchema)
module.exports = LoaiThe