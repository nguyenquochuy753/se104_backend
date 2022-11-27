const mongoose = require('mongoose')

const CauThuSchema = mongoose.Schema({
    MACT: {
        type: int,
        required: true
    },
    MACLB: {
        type: int,
        required: true
    },
    HOTEN: {
        type: string,
        required: true
    },
    NGAYSINH: {
        type: Date,
        required: true
    },
    QUOCTICH: {
        type: varchar,
        required: true
    },
    AVATAR: {
        data: Buffer,
        contentType: String,
        required: true
    },
    SOAO: {
        type: int,
        required: true
    },
    VITRI: {
        type: string,
        required: true
    },
    SOBANTHANG: {
        type: int,
        default:0
    },
    SOTHEDO: {
        type: int,
        default:0
    },
    SOTHEVANG: {
        type: int,
        default:0
    }
})

const CauThu = mongoose.model('CauThu',CauThuSchema)
module.exports = CauThu