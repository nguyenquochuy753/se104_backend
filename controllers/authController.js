const TaiKhoanModel = require('../models/TaiKhoan')

const TaiKhoan = {
    DangKyTaiKhoan: async (req, res) => {
        const taikhoan = new TaiKhoanModel({
            TENTAIKHOAN: req.body.TENTAIKHOAN,
            MATKHAU: req.body.MATKHAU
        })
        try {
            await taikhoan.save()
            res.status(200).json(taikhoan)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = TaiKhoan