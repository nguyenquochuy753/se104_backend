const mongoose = require('mongoose')

const BanThangSchema = mongoose.Schema({
    ID_BANTHANG: {
        type: int,
        required: true
    },
    MACT: {
        type: int,
        required: true
    },
    MACLB: {
        type: int,
        required: true
    },
    MACT_TD: {
        type: int,
        required: true
    },
    PHUTGHIBAN: {
        type: int,
        required: true
    }
    
})

const BanThang = mongoose.model('BanThang',BanThangSchema)
module.exports = BanThang