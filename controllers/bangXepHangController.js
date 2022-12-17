const BangXepHangModel = require('../models/BangXepHang')

const bangXepHangController = {
    readBangXepHang: async(req , res)=>{
        try {
            const BangXepHangs = await BangXepHangModel.find({});
            res.status(200).json(BangXepHangs)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addBangXepHang: async(req , res) =>{
        try {
            const BangXepHang = new BangXepHangModel(req.body)
            await BangXepHang.save()
            res.status(200).json(BangXepHang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateBangXepHang: async(req , res)=>{
        try {
            const bangxephang = await BangXepHangModel.findById(req.body._id)
            bangxephang.MACLB = req.body.MACLB
            bangxephang.MAMG = req.body.MAMG
            bangxephang.TENCLB = req.body.TENCLB
            bangxephang.save()
            res.status(200).json(bangxephang)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteBangXepHang: async(req , res)=>{
        try {
            await BangXepHangModel.findByIdAndDelete(req.body._id)
            res.status(200).json('Xóa thành công')
        } catch (error) {
            res.status(500).json('Xóa thất bại')
        }
    },
    sort: async(req,res)=>{
        try {
            const sortBangXepHang = await BangXepHangModel.find().sort({
                DIEM:-1,
                HIEUSO:-1
            })
            res.status(200).json(sortBangXepHang)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = bangXepHangController;

