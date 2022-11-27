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
        type: string,
        required: true
    },
    SOTHEVANG: {
        type: int,
        default:0
    },
    SOTHEDO: {
        type: int,
        default:0
    }

})

const DSNhanThe = mongoose.model('DSNhanThe',DSNhanTheSchema)
module.exports = DSNhanThe