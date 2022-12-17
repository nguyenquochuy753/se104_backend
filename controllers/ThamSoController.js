const ThamSo = require("../models/ThamSo");

const ThamSoController = {
  post_ThamSo: async (req, res) => {
    try {
      ThamSo.findOne({
        MAMG: req.params.idMG,
        TENTHAMSO: req.body.TENTHAMSO,
      }).exec((err, ts) => {
        if (err) console.log(err);
        if (ts) {
          ThamSo.findOneAndUpdate(
            { MAMG: req.params.idMG, TENTHAMSO: req.body.TENTHAMSO },
            {
              $set: {
                GIATRITHAMSO: req.body.GIATRITHAMSO,
              },
            }
          ).exec((err, ts) => {
            if (err) return res.status(400).json({ err });
            if (ts) return res.status(201).json({ ts });
          });
        } else {
          const thamso = new ThamSo({
            MAMG: req.params.idMG,
            TENTHAMSO: req.body.TENTHAMSO,
            GIATRITHAMSO: req.body.GIATRITHAMSO,
          });
          thamso.save((err, ts) => {
            if (err) return res.status(400).json({ err });
            if (ts) return res.status(201).json({ ts });
          });
        }
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get_list_ThamSo: async (req, res) => {
    const thamso = await ThamSo.find({ MAMG: req.params.idMG });
    try {
      res.send(thamso);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update_ThamSo: async (req, res) => {
    try {
      const thamso = await ThamSo.findByIdAndUpdate(req.params.id, req.body);
      await thamso.save();
      res.send(thamso);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete_ThamSo: async (req, res) => {
    try {
      const thamso = await ThamSo.findByIdAndDelete(req.params.id, req.body);
      if (!thamso) res.status(404).send("Khong tim thay tham so");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = ThamSoController;
