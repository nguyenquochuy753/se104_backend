const TranDauModel = require("../models/TranDau");

const TranDauController = {
  readTranDau: async (req, res) => {
    try {
      TranDauModel.find()
        .populate([
          { path: "DOI1", select: ["_id", "TENCLB", "LOGO"] },
          { path: "DOI2", select: ["_id", "TENCLB", "LOGO"] },
        ])
        .lean()
        .exec((err, trandau) => {
          if (err) console.log(err);
          if (trandau) res.status(200).json(trandau);
        });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addTranDau: async (req, res) => {
    try {
      const trandau = new TranDauModel(req.body);
      trandau.save();
      res.status(200).json(trandau);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateTranDau: async (req, res) => {
    try {
      const trandau = await TranDauModel.findByIdAndUpdate(
        req.params.idTD,
        req.body
      );
      await trandau.save();
      res.status(200).json(trandau);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteTranDau: async (req, res) => {
    try {
      await TranDauModel.findByIdAndDelete(req.body._id);
      res.status(200).json("Xóa thành công");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getTranDauById: async (req, res) => {
    try {
      TranDauModel.find({ _id: req.params.id })
        .populate([
          {
            path: "DOI1",
            select: "TENCLB LOGO",
          },
          {
            path: "DOI2",
            select: "TENCLB LOGO",
          },
        ])
        .lean()
        .exec((error, trandau) => {
          if (error) res.send({ error });
          if (trandau) res.status(200).json(trandau);
        });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = TranDauController;
