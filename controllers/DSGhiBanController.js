const DSGhiBanModel = require("../models/DSGhiBan");

const DSGhiBan = {
  TaoDSGhiBan: async (req, res) => {
    try {
      DSGhiBanModel.findOne({
        MACT: req.body.MACT,
      }).exec((err, ds) => {
        if (err) console.log(err);
        if (ds) {
          DSGhiBanModel.findOneAndUpdate(
            { MACT: req.body.MACT },
            { $inc: { SOBANTHANG: 1 } }
          ).exec((err, ds) => {
            if (err) return res.status(400).json(err);
            if (ds) return res.status(201).json(ds);
          });
        } else {
          const dsgb = new DSGhiBanModel({
            MACT: req.body.MACT,
            MACLB: req.body.MACLB,
            SOBANTHANG: 1,
          });
          dsgb.save((err, ds) => {
            if (err) return res.status(400).json(err);
            if (ds) return res.status(201).json(ds);
          });
        }
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  GetDSGhiBan: async (req, res) => {
    const DSGB = await DSGhiBanModel.find({});
    try {
      res.status(200).json(DSGB);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  UpdateDSGhiBan: async (req, res) => {
    try {
      const DSGB = await DSGhiBanModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      await DSGB.save();
      res.send(DSGB);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  DeleteDSGhiBan: async (req, res) => {
    try {
      const DSGB = await DSGhiBanModel.findByIdAndDelete(
        req.params.id,
        req.body
      );
      if (!DSGB) res.status(404).send("Không tìm thấy dữ liệu");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = DSGhiBan;
