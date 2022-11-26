const mongoose = require('mongoose')

const HuanLuyenVienSchema = mongoose.Schema({
    MACLB: {
        type: String,
        required: true
    },
    HOTEN: {
        type: String,
        required: true
    },
    NGAYSINH: {
        type: Date,
        required: true
    },
    NGAYTHAMGIA: {
        type: Date,
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
        data: Buffer,
        contentType: String,
        required: true
    }
}, { timestamps: true })

const HuanLuyenVien = mongoose.model('HuanLuyenVien', HuanLuyenVienSchema)
module.exports = HuanLuyenVien