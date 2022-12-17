const mongoose = require('mongoose')

const CauThuSchema = mongoose.Schema({
    MAMG: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MuaGiai',
        required: true
    },
    MACLB: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'CauLacBo',
        required: true
    },
    HOTEN: {
        type: String,
        required: true
    },
    NGAYSINH: {
        type: String,
        required: true
    },
    QUOCTICH: {
        type: String,
        required: true
    },
    AVATAR: {
        type: String,
        required: true
    },
    SOAO: {
        type: Number,
        required: true
    },
    VITRI: {
        type: String,
        required: true
    },
    SOBANTHANG: {
        type: Number,
        default:0
    },
    SOTHEDO: {
        type: Number,
        default:0
    },
    SOTHEVANG: {
        type: Number,
        default:0
    }
})

const CauThu = mongoose.model('CauThu',CauThuSchema)
module.exports = CauThu