const CauThuModel = require('../models/CauThu');

const CauThu = {
    TaoCauThu: async (req, res) => {
        const cauthu = new CauThuModel(req.body)
        try {
            await CauThu.save()
            res.status(200).json(cauthu)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetCauThu: async (req, res) => {
        const CT = await CauThuModel.find({});
        try {
            res.status(200).json(CT)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    UpdateCauThu: async (req, res) => {
        try {
            const CT = await CauThuModel.findByIdAndUpdate(req.params.id, req.body);
            await CT.save();
            res.send(CT);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteCauThu: async (req, res) => {
        try {
            const CT = await CauThuModel.findByIdAndDelete(req.params.id, req.body);
            if (!CT) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = CauThu