const mongoose = require('mongoose')

const CauLacBoSchema = mongoose.Schema({
    MAMG: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'MuaGiai',
        required: true
    },
    TENCLB: {
        type: String,
        required: true
    },
    NAMTHANHLAP: {
        type: String,
        required: true
    },
    SANVANDONG: {
        type: String,
        required: true
    },
    SL_CAUTHU: {
        type: Number,
        default: 0
    },
    SL_HLV: {
        type: Number,
        default: 0
    },
    LOGO: {
        type: String,
        required: true
    }
}, { timestamps: true })

const CauLacBo = mongoose.model('CauLacBo', CauLacBoSchema)
module.exports = CauLacBo