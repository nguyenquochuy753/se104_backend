const CauThuModel = require("../models/CauThu");

const CauThu = {
  TaoCauThu: async (req, res) => {
    const cauthu = new CauThuModel(req.body);
    if (req.file) {
      cauthu.AVATAR = req.file.path;
    }
    try {
      await cauthu.save();
      res.status(200).json(cauthu);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  GetCauThu: async (req, res) => {
    const CT = await CauThuModel.find({});
    try {
      res.status(200).json(CT);
    } catch (error) {
      res.status(500).json(error);
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
  },
  SearchCauThu: async (req, res) => {
    const data = await CauThuModel.find({
      $or: [{ HOTEN: { $regex: req.params.key, $options: "i" } }],
    });
    res.send(data);
  },
  SearchCauThubyMG: async (req, res) => {
    const { muagiaiID } = req.params;
    const data = await CauThuModel.find({ MAMG: muagiaiID });
    res.send(data);
  },
  SearchCauThuByClub: async (req, res) => {
    const data = await CauThuModel.find({
      MACLB: req.params.CauLacBoID,
    });
    res.send(data);
  },
  SearchCauThuById: async (req, res) => {
    const data = await CauThuModel.find({
      _id: req.params.CauThuId,
    });
    res.status(200).json(data);
  },
  UpdateTheVang: async (req, res) => {
    CauThuModel.findOneAndUpdate(
      { _id: req.params.idCauThu },
      { $inc: { SOTHEVANG: 1 } }
    ).exec((err, ct) => {
      if (err) console.log(err);
      if (ct) res.status(200).json(ct);
    });
  },
  UpdateTheDo: async (req, res) => {
    CauThuModel.findOneAndUpdate(
      { _id: req.params.idCauThu },
      { $inc: { SOTHEDO: 1 } }
    ).exec((err, ct) => {
      if (err) console.log(err);
      if (ct) res.status(200).json(ct);
    });
  },
  UpdateBanThang: async (req, res) => {
    CauThuModel.findOneAndUpdate(
      { _id: req.params.idCauThu },
      { $inc: { SOBANTHANG: 1 } }
    ).exec((err, ct) => {
      if (err) console.log(err);
      if (ct) res.status(200).json(ct);
    });
  },
};

module.exports = CauThu;
