const BangXepHangModel = require('../models/BangXepHang')

const bangXepHangController = {
    readBangXepHang: async(req , res)=>{
        try {
            const BangXepHangs = await BangXepHangModel.find({});
            res.status(200).json(BangXepHangs)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = bangXepHangController;

