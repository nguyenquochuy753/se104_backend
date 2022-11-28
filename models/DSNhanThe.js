const mongoose = require('mongoose')

const DSNhanTheSchema = mongoose.Schema({
    MACT: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CauThu',
        required: true
    },
    MACLB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CauLacBo',
        required: true
    },
    VITRI: {
        type: String,
        required: true
    },
    SOTHEVANG: {
        type: Number,
        default:0
    },
    SOTHEDO: {
        type: Number,
        default:0
    }

})

const DSNhanThe = mongoose.model('DSNhanThe',DSNhanTheSchema)
module.exports = DSNhanThe