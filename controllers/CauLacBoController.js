const CauLacBoModel = require('../models/CauLacBo');

const CauLacBo = {
    TaoCauLacBo: async (req, res) => {
        const CauLacBo = new CauLacBoModel({
            MAMG: req.body.MAMG,
            TENCLB: req.body.TENCLB,
            NAMTHANHLAP: req.body.NAMTHANHLAP,
            SANVANDONG: req.body.SANVANDONG,
            SL_CAUTHU: req.body.SL_CAUTHU,
            SL_HLV: req.body.SL_HLV,
        })
        if (req.file) {
            CauLacBo.LOGO = req.file.path;
        }
        try {
            await CauLacBo.save()
            res.status(200).json(CauLacBo)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetCauLacBo: async (req, res) => {
        const CLB = await CauLacBoModel.find({ MAMG: req.params.idMG });
        try {
            res.status(200).json(CLB);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    GetCauLacBo1: async (req, res) => {
        const CLB = await CauLacBoModel.find();
        try {
            res.status(200).json(CLB);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    GetaClub: async (req, res) => {
        try {
            const CLB = await CauLacBoModel.findById({ _id: req.params.id });
            res.status(200).json(CLB);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    UpdateCauLacBo: async (req, res) => {
        try {
            const CLB = await CauLacBoModel.findByIdAndUpdate(req.params.id, req.body);
            await CLB.save();
            res.send(CLB);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteCauLacBo: async (req, res) => {
        try {
            const CLB = await CauLacBoModel.findByIdAndDelete(req.params.id, req.body);
            if (!CLB) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchCauLacBo: async (req, res) => {
        const data = await CauLacBoModel.find({
            "$or": [
                { TENCLB: { $regex: req.params.key, $options: 'i' } },
                { SANVANDONG: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    },
    SearchCauLacBobyMG: async (req, res) => {
        const { muagiaiID } = req.params;
        const data = await CauLacBoModel.find({ MAMG: muagiaiID })
        res.send(data)
    },
    themHLV: async (req, res) => {
        try {
            const id = req.body._id;
            const clb = await CauLacBoModel.findById(id)
            clb.SL_HLV = clb.SL_HLV + 1;
            clb.save()
            res.status(200).json(clb)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    themCT: async (req, res) => {
        try {
            const id = req.body._id;
            const clb = await CauLacBoModel.findById(id)
            clb.SL_CAUTHU = clb.SL_CAUTHU + 1;
            clb.save()
            res.status(200).json(clb)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    SearchCauLacBobyMG_key: async (req, res) => {
        const { muagiaiID } = req.params;
        const data = await CauLacBoModel.find({
            $and: [
                {
                    $or: [
                        { TENCLB: { $regex: req.params.key, $options: 'i' } },
                        { SANVANDONG: { $regex: req.params.key, $options: 'i' } }
                    ],
                },
                { MAMG: muagiaiID },
            ],
        })
        res.send(data)
    },
    xoaHLV: async (req, res) => {
        try {
            const id = req.body._id;
            const clb = await CauLacBoModel.findById(id)
            clb.SL_HLV = clb.SL_HLV - 1;
            clb.save()
            res.status(200).json(clb)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    xoaCT: async (req, res) => {
        try {
            const id = req.body._id;
            const clb = await CauLacBoModel.findById(id)
            clb.SL_CAUTHU = clb.SL_CAUTHU - 1;
            clb.save()
            res.status(200).json(clb)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = CauLacBo