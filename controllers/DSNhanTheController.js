const DSNhanTheModel = require('../models/DSNhanThe');

const DSNhanThe = {
    TaoDSNhanThe: async (req, res) => {
        const dsnhanthe = new DSNhanTheModel(req.body)
        try {
            await dsnhanthe.save()
            res.status(200).json(dsnhanthe)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    GetDSNhanThe: async (req, res) => {
        const DSNT = await DSNhanTheModel.find({});
        try {
            res.status(200).json(DSNT)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    UpdateDSNhanThe: async (req, res) => {
        try {
            const DSNT = await DSNhanTheModel.findByIdAndUpdate(req.params.id, req.body);
            await DSNT.save();
            res.send(DSNT);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    DeleteDSNhanThe: async (req, res) => {
        try {
            const DSNT = await DSNhanTheModel.findByIdAndDelete(req.params.id, req.body);
            if (!DSNT) res.status(404).send("Không tìm thấy dữ liệu");
            res.status(200).send();
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = DSNhanThe