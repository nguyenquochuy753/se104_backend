const LoaiBanThangModel = require('../models/LoaiBanThang')

const LoaiBanThangController = {
    readLoaiBanThang: async (req, res) => {
        try {
            const loaibanthangs = await LoaiBanThangModel.find({})
            res.status(200).json(loaibanthangs)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addLoaiBanThang: async (req, res) => {
        try {
            const loaibanthang = new LoaiBanThangModel(req.body)
            loaibanthang.save()
            res.status(200).json(loaibanthang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateLoaiBanThang: async (req, res) => {
        try {
            const loaibanthang = await LoaiBanThangModel.findById(req.body._id)
            loaibanthang.TENBANTHANG = req.body.TENBANTHANG
            loaibanthang.save()
            res.status(200).json(loaibanthang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteLoaiBanThang: async (req, res) => {
        try {
            await LoaiBanThangModel.findByIdAndDelete(req.body._id)
            res.status(200).json('Xóa thành công')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = LoaiBanThangController