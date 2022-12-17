const LoaiBanThangModel = require("../models/LoaiBanThang");

const LoaiBanThangController = {
  readLoaiBanThang: async (req, res) => {
    try {
      const loaibanthangs = await LoaiBanThangModel.find({});
      res.status(200).json(loaibanthangs);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addLoaiBanThang: async (req, res) => {
    try {
      const loaibanthang = new LoaiBanThangModel(req.body);
      loaibanthang.save();
      res.status(200).json(loaibanthang);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateLoaiBanThang: async (req, res) => {
    try {
      const loaibanthang = await LoaiBanThangModel.findById(req.body._id);
      loaibanthang.TEN = req.body.TEN;
      loaibanthang.save();
      res.status(200).json(loaibanthang);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteLoaiBanThang: async (req, res) => {
    try {
      const loaibanthang = await LoaiBanThangModel.findByIdAndDelete(
        req.params.id,
        req.body
      );
      if (!loaibanthang) res.status(404).send("Khong tim thay loai ban thang!");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = LoaiBanThangController;
