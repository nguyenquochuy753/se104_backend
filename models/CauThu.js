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
        type: varchar,
        required: true
    },
    NGAYSINH: {
        type: dateTime,
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
        type: varchar,
        required: true
    },
    SOBANTHANG: {
        type: int,
        required: true
    },
    SOTHEDO: {
        type: int,
        required: true
    },
    SOTHEVANG: {
        type: int,
        required: true
    }
})

const CauThu = mongoose.model('CauThu',CauThuSchema)
module.exports = CauThu