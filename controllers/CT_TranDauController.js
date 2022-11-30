const CT_TranDau = require("../models/CT_TranDau");

const CT_TranDauController = {
  post_CT_TranDau: async (req, res) => {
    const CTTD = new CT_TranDau(req.body);
    try {
      await CTTD.save();
      res.send(CTTD);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get_list_CT_TranDau: async (req, res) => {
    const CTTD = await CT_TranDau.find({});
    try {
      res.send(CTTD);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update_CT_TranDau: async (req, res) => {
    try {
      const CTTD = await CT_TranDau.findByIdAndUpdate(req.params.id, req.body);
      await CTTD.save();
      res.send(CTTD);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete_CT_TranDau: async (req, res) => {
    try {
      const CTTD = await CT_TranDau.findByIdAndDelete(req.params.id, req.body);
      if (!CTTD) res.status(404).send("No match found");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = CT_TranDauController;
