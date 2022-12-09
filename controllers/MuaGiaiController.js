const MuaGiaiModel = require('../models/MuaGiai');

const MuaGiai = {
    TaoMuaGiai: async (req, res) => {
        const muagiai = new MuaGiaiModel(req.body)
        if (req.file) {
            muagiai.LOGO = req.file.path
        }
        try {
            await muagiai.save()
            res.status(200).json(muagiai)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetMuaGiai: async (req, res) => {
        const MG = await MuaGiaiModel.find({});
        try {
            res.status(200).json(MG)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    GetMuaGiaibyID: async (req, res) => {
        const { muagiaiID } = req.params;
        const MG = await MuaGiaiModel.findOne({ _id: muagiaiID })
        try {
            res.status(200).json(MG)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    UpdateMuaGiai: async (req, res) => {
        try {
            const MG = await MuaGiaiModel.findByIdAndUpdate(req.params.id, req.body);
            await MG.save();
            res.send(MG);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteMuaGiai: async (req, res) => {
        try {
            const MG = await MuaGiaiModel.findByIdAndDelete(req.params.id, req.body);
            if (!MG) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    },
    SearchMuaGiai: async (req, res) => {
        const data = await MuaGiaiModel.find({
            "$or": [
                { TENMUAGIAI: { $regex: req.params.key, $options: 'i' } }
            ]
        })
        res.send(data)
    }
}

module.exports = MuaGiai