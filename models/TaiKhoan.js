const mongoose = require('mongoose')

const TaiKhoanSchema = mongoose.Schema({
    TENTAIKHOAN: {
        type: String,
        required: true
    },
    MATKHAU: {
        type: String,
        required: true
    },
    PHANQUYEN: {
        type: String,
        default: ''
    }
})

const TaiKhoan = mongoose.model('TaiKhoan',TaiKhoanSchema)
module.exports = TaiKhoan