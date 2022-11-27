const mongoose = require('mongoose')

const BangXepHangSchema = mongoose.Schema({
    MACLB: {
        type:Number
    },
    MAMG: {
        type: Number
    },
    TENCLB: {
        type: String
    },
    TRANDACHOI: {
        type: Number,
        default: 0
    },
    THANG: {
        type: Number,
        default: 0
    },
    HOA: {
        type: Number,
        default: 0
    },
    THUA: {
        type: Number,
        default: 0
    },
    BANTHANG: {
        type: Number,
        default: 0
    },
    BANTHUA: {
        type: Number,
        default: 0
    },
    HIEUSO: {
        type: Number,
        default: 0
    },
    DIEM: {
        type: Number,
        default: 0
    },
})

const BangXepHang = mongoose.model('BangXepHang',BangXepHangSchema);
module.exports = BangXepHang;