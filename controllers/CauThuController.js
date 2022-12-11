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
  topGhiBan: async(req , res)=>{
    try {
      const sortCauThus = await CauThuModel.find({}).sort({
        SOBANTHANG:-1
      })
      res.status(200).json(sortCauThus)
    } catch (error) {
      res.status(500).json(error)
    }
  },
  topThePhat: async (req, res) => {
    try {
      const sortCauThus = await CauThuModel.find({}).sort({
        SOTHEVANG: -1,
        SOTHEDO: -1
      })
      res.status(200).json(sortCauThus)
    } catch (error) {
      res.status(500).json(error)
    }
  },
};

module.exports = CauThu;