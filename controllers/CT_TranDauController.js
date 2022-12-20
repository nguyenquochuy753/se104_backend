const CT_TranDau = require("../models/CT_TranDau");

const CT_TranDauController = {
  post_CT_TranDau: async (req, res) => {
    try {
      CT_TranDau.findOne({
        MATD: req.body.MATD,
      }).exec((err, ct) => {
        if (err) console.log(err);
        if (ct) {
          CT_TranDau.findOneAndUpdate(
            { MATD: req.body.MATD },
            {
              $set: {
                SCORE_1: req.body.SCORE_1,
                SCORE_2: req.body.SCORE_2,
                CARD_1: req.body.CARD_1,
                CARD_2: req.body.CARD_2,
              },
            }
          ).exec((err, ct) => {
            if (err) return res.status(400).json(err);
            if (ct) return res.status(201).json(ct);
          });
        } else {
          const ct_td = new CT_TranDau({
            MATD: req.body.MATD,
            SCORE_1: req.body.SCORE_1,
            SCORE_2: req.body.SCORE_2,
            CARD_1: req.body.CARD_1,
            CARD_2: req.body.CARD_2,
          });
          ct_td.save((err, ct) => {
            if (err) return res.status(400).json(err);
            if (ct) return res.status(201).json(ct);
          });
        }
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get_list_CT_TranDau: async (req, res) => {
    try {
      // res.send(CTTD);
      CT_TranDau.find({ MATD: req.params.id })
        .populate([
          {
            path: "MATD",
            select: ["DOI1", "DOI2"],
            populate: [
              { path: "DOI1", select: "TENCLB LOGO" },
              { path: "DOI2", select: "TENCLB LOGO" },
            ],
          },
        ])
        .lean()
        .exec((err, ct) => {
          if (err) console.log(err);
          if (ct) res.status(200).json(ct);
        });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get_list: async (req, res) => {
    try {
      // res.send(CTTD);
      CT_TranDau.find({})
        .populate([
          {
            path: "MATD",
            select: ["DOI1", "DOI2"],
            populate: [
              { path: "DOI1", select: "TENCLB LOGO" },
              { path: "DOI2", select: "TENCLB LOGO" },
            ],
          },
        ])
        .lean()
        .exec((err, ct) => {
          if (err) console.log(err);
          if (ct) res.status(200).json(ct);
        });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getlistbyBXH: async (req, res) => {
    try {
      CT_TranDau.find({})
        .populate([
          {
            path: "MATD",
            select: ["DOI1", "DOI2"],
            populate: [
              { path: "DOI1", select: "TRANDACHOI THANG HOA THUA" },
              { path: "DOI2", select: "TRANDACHOI THANG HOA THUA" },
            ],
          },
        ])
        .lean()
        .exec((err, ct) => {
          if (err) console.log(err);
          if (ct) res.status(200).json(ct);
        });
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
  updateSCORE_1: async (req, res) => {
    try {
      const value = `${req.body.VALUE}`;
      CT_TranDau.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { SCORE_1: value } }
      ).exec((err, ct) => {
        if (err) console.log(err);
        if (ct) res.status(200).json(ct);
      });
    } catch (error) { }
  },
  updateSCORE_2: async (req, res) => {
    try {
      const value = `${req.body.VALUE}`;
      CT_TranDau.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { SCORE_2: value } }
      ).exec((err, ct) => {
        if (err) console.log(err);
        if (ct) res.status(200).json(ct);
      });
    } catch (error) { }
  },
  updateCARD_1: async (req, res) => {
    try {
      const value = `${req.body.VALUE}`;
      CT_TranDau.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { CARD_1: value } }
      ).exec((err, ct) => {
        if (err) console.log(err);
        if (ct) res.status(200).json(ct);
      });
    } catch (error) { }
  },
  updateCARD_2: async (req, res) => {
    try {
      const value = `${req.body.VALUE}`;
      CT_TranDau.findOneAndUpdate(
        { _id: req.params.id },
        { $inc: { CARD_2: value } }
      ).exec((err, ct) => {
        if (err) console.log(err);
        if (ct) res.status(200).json(ct);
      });
    } catch (error) { }
  },
};

module.exports = CT_TranDauController;
