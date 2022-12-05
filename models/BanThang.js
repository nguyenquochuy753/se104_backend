const mongoose = require('mongoose')

const BanThangSchema = mongoose.Schema({
    MACT: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'CauThu',
        required: true
    },
    MACLB: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'CauLacBo',
        required: true
    },
    MACT_TD: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'CT_TranDau',
        required: true
    },
    PHUTGHIBAN: {
        type: Number,
        required: true
    },
    LOAIBANTHANG: {
        type: String,
        required: true
    }
    
})

const BanThang = mongoose.model('BanThang',BanThangSchema)
module.exports = BanThang