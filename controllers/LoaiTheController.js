const LoaiTheModel = require('../models/LoaiThe');

const LoaiThe = {
    TaoLoaiThe: async (req, res) => {
        const LoaiThe = new LoaiTheModel(req.body)
        try {
            await LoaiThe.save()
            res.status(200).json(LoaiThe)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetLoaiThe: async (req, res) => {
        const LT = await LoaiTheModel.find({});
        try {
            res.status(200).json(LT)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    UpdateLoaiThe: async (req, res) => {
        try {
            const LT = await LoaiTheModel.findByIdAndUpdate(req.params.id, req.body);
            await LT.save();
            res.send(LT);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteLoaiThe: async (req, res) => {
        try {
            const LT = await LoaiTheModel.findByIdAndDelete(req.params.id, req.body);
            if (!LT) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = LoaiThe