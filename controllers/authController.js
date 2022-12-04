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
    },
    DangNhap : async(req , res) =>{
        try {
            const taikhoan = await TaiKhoanModel.findOne({"TENTAIKHOAN":req.body.TENTAIKHOAN})
            if (taikhoan.MATKHAU == req.body.MATKHAU) {
                res.status(200).json('Đăng nhập thành công')
            }
            else{
                res.status(401).json('Sai mật khẩu')
            }
        } catch (error) {
            res.status(500).json(error)
        }
        
    }
}

module.exports = TaiKhoan