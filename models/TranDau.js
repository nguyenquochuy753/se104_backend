const mongoose = require('mongoose');

const TranDauSchema = mongoose.Schema({
    NGAYDIENRA: {
        type: String,
        required: true
    },
    THOIGIANDIENRA: {
        type: String,
        required: true
    },
    DOI1:{
        type:Number
    },
    DOI2: {
        type: Number
    },
    VONGDAU: {
        type: Number,
        required: true
    },
    LUOTDAU:{
        type: Number,
        required:true
    },
    SANVANDONG:{
        type: String
    }

})

const TranDau = mongoose.model('TranDau',TranDauSchema)
module.exports = TranDau