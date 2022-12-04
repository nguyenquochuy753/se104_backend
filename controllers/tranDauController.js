const TranDauModel = require('../models/TranDau')

const TranDauController = {
    readTranDau: async(req,res)=>{
        try {
            const trandaus = await TranDauModel.find({})
            res.status(200).json(trandaus)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addTranDau: async(req,res)=>{
        try {
            const trandau = new TranDauModel(req.body)
            trandau.save()
            res.status(200).json(trandau)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateTranDau: async(req,res)=>{
        try {
            const trandau = await TranDauModel.findById(req.body._id)
            trandau.NGAYDIENRA = req.body.NGAYDIENRA
            trandau.THOIGIANDIENRA = req.body.THOIGIANDIENRA
            trandau.DOI1 = req.body.DOI1
            trandau.DOI2 = req.body.DOI2
            trandau.VONGDAU = req.body.VONGDAU
            trandau.LUOTDAU = req.body.LUOTDAU
            trandau.SANVANDONG = req.body.SANVANDONG
            trandau.save()
            res.status(200).json(trandau)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteTranDau: async(req,res)=>{
       try {
           await TranDauModel.findByIdAndDelete(req.body._id)
           res.status(200).json('Xóa thành công')
       } catch (error) {
            res.status(500).json(error)
       }
    }
}

module.exports = TranDauController