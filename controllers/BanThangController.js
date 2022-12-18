const BanThangModel = require("../models/BanThang");

const BanThang = {
  TaoBanThang: async (req, res) => {
    const banthang = new BanThangModel(req.body);
    try {
      await banthang.save();
      res.status(200).json(banthang);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  GetBanThang: async (req, res) => {
    const BT = await BanThangModel.find({});
    try {
      res.status(200).json(BT);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  UpdateBanThang: async (req, res) => {
    try {
      const BT = await BanThangModel.findByIdAndUpdate(req.params.id, req.body);
      await BT.save();
      res.send(BT);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  DeleteBanThang: async (req, res) => {
    try {
      const BT = await BanThangModel.findByIdAndDelete(req.params.id, req.body);
      if (!BT) res.status(404).send("Không tìm thấy dữ liệu");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getBanThangByCT_TD: async (req, res) => {
    BanThangModel.find({ MACT_TD: req.params.idCT_TD })
      .populate([
        {
          path: "MACT",
          select: "HOTEN",
        },
      ])
      .lean()
      .exec((error, banthang) => {
        if (error) res.send({ error });
        if (banthang) res.status(200).json(banthang);
      });
  },
};

module.exports = BanThang;
