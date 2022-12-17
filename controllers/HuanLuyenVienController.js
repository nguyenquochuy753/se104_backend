const HuanLuyenVienModel = require('../models/HuanLuyenVien');

const HuanLuyenVien = {
    TaoHuanLuyenVien: async (req, res) => {
        const HuanLuyenVien = new HuanLuyenVienModel(req.body)
        if (req.file) {
            HuanLuyenVien.AVATAR = req.file.path
        }
        try {
            await HuanLuyenVien.save()
            res.status(200).json(HuanLuyenVien)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetHuanLuyenVien: async (req, res) => {
        const HLV = await HuanLuyenVienModel.find({});
        try {
            res.status(200).json(HLV)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetaCoach: async (req, res) => {
        try {
            const HLV = await HuanLuyenVienModel.findById({_id: req.params.id});
            res.status(200).json(HLV)
        } catch (error) {
            res.status(500).send(error);
        }
    },

    UpdateHuanLuyenVien: async (req, res) => {
        try {
            const HLV = await HuanLuyenVienModel.findByIdAndUpdate(req.params.id, req.body);
            await HLV.save();
            res.send(HLV);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteHuanLuyenVien: async (req, res) => {
        try {
            const HLV = await HuanLuyenVienModel.findByIdAndDelete(req.params.id, req.body);
            if (!HLV) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchHuanLuyenVien: async (req, res) => {
        const data = await HuanLuyenVienModel.find({
            "$or": [
                { HOTEN: { $regex: req.params.key, $options: 'i' } },
                { QUOCTICH: { $regex: req.params.key, $options: 'i' } },
                { LOAI: { $regex: req.params.key, $options: 'i' } }

            ]
        })
        res.send(data)
    },
    SearchHuanLuyenVienbyMG: async (req, res) => {
        const { muagiaiID } = req.params;
        const data = await HuanLuyenVienModel.find({ MAMG: muagiaiID })
        res.send(data)
    },
    SearchHuanLuyenVienbyMG_key: async (req, res) => {
        const { muagiaiID } = req.params;
        const data = await HuanLuyenVienModel.find({
          $and: [
            {
          $or: [
            { HOTEN: { $regex: req.params.key, $options: 'i' } },
            { QUOCTICH: { $regex: req.params.key, $options: 'i' } },
            { LOAI: { $regex: req.params.key, $options: 'i' } }
          ],
          },
            { MAMG: muagiaiID },
          ],
        })
        res.send(data)
    },
}

module.exports = HuanLuyenVien