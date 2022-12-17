const mongoose = require('mongoose')

const HuanLuyenVienSchema = mongoose.Schema({
    MAMG: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MuaGiai',
        required: true
    },
    MACLB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CauLacBo',
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
    NGAYTHAMGIA: {
        type: String,
        required: true
    },
    QUOCTICH: {
        type: String,
        required: true
    },
    LOAI: {
        type: String,
        required: true
    },
    AVATAR: {
        type: String,
        required: true
    }
}, { timestamps: true })

const HuanLuyenVien = mongoose.model('HuanLuyenVien', HuanLuyenVienSchema)
module.exports = HuanLuyenVien