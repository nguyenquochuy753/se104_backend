const DSGhiBanModel = require('../models/DSGhiBan');

const DSGhiBan = {
    TaoDSGhiBan: async (req, res) => {
        const dsghiban = new DSGhiBanModel(req.body)
        try {
            await DSGhiBan.save()
            res.status(200).json(dsghiban)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetDSGhiBan: async (req, res) => {
        const DSGB = await DSGhiBanModel.find({});
        try {
            res.status(200).json(DSGB)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    UpdateDSGhiBan: async (req, res) => {
        try {
            const DSGB = await DSGhiBanModel.findByIdAndUpdate(req.params.id, req.body);
            await DSGB.save();
            res.send(DSGB);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteDSGhiBan: async (req, res) => {
        try {
            const DSGB = await DSGhiBanModel.findByIdAndDelete(req.params.id, req.body);
            if (!DSGB) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = DSGhiBan