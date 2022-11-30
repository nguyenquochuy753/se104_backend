const mongoose = require('mongoose')

const BangXepHangSchema = mongoose.Schema({
    MACLB: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'CauLacBo',
        required:true
    },
    MAMG: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'MuaGiai',
        required: true
    },
    TENCLB: {
        type: mongoose.Schema.Types.String,
        ref:'CauLacBo',
        required: true
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