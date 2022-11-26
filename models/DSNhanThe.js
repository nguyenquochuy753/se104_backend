const mongoose = require('mongoose')

const DSNhanTheSchema = mongoose.Schema({
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
    SOTHEVANG: {
        type: int,
        required: true
    },
    SOTHEDO: {
        type: int,
        required: true
    }

})

const DSNhanThe = mongoose.model('DSNhanThe',DSNhanTheSchema)
module.exports = DSNhanThe