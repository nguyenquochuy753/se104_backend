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
        type: varchar,
        required: true
    },
    SOBANTHANG: {
        type: int,
        required: true
    }
})

const DSGhiBan = mongoose.model('DSGhiBan',DSGhiBanSchema)
module.exports = DSGhiBan