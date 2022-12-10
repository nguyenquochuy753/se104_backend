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
        if(req.file){
        }
        try {
            await CauLacBo.save()
            res.status(200).json(CauLacBo)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetCauLacBo: async (req, res) => {
        const CLB = await CauLacBoModel.find({});
        try {
            res.status(200).json(CLB)
        } catch (error) {
            res.status(500).json(error)
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
    }

}

module.exports = CauLacBo