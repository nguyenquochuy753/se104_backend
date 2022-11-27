const mongoose = require('mongoose')

const DSGhiBanSchema = mongoose.Schema({
    MACT: {
        type: int,
        required: true
    },
    MACLB: {
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
    }
})

const DSGhiBan = mongoose.model('DSGhiBan',DSGhiBanSchema)
module.exports = DSGhiBan