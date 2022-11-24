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
    ADMIN: {
        type: Boolean,
        default: false
    },
    ORGANIZER: {
        type: Boolean,
        default: false
    },
    Manager: {
        type: Boolean,
        default:false
    }
})

const TaiKhoan = mongoose.model('TaiKhoan',TaiKhoanSchema)
module.exports = TaiKhoan