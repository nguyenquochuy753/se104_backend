const mongoose = require('mongoose')

const CauLacBoSchema = mongoose.Schema({
    MAMG: {
        type: String,
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
        type: int,
        default: 0
    },
    SL_HLV: {
        type: int,
        default: 0
    },
    LOGO: {
        data: Buffer,
        contentType: String,
        required: true
    }
}, { timestamps: true })

const CauLacBo = mongoose.model('CauLacBo', CauLacBoSchema)
module.exports = CauLacBo