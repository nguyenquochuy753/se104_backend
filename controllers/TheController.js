const The = require("../models/The");

const TheController = {
  post_The: async (req, res) => {
    const the = new The(req.body);
    try {
      await the.save();
      res.send(the);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get_list_The: async (req, res) => {
    const the = await The.find({});
    try {
      res.send(the);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update_The: async (req, res) => {
    try {
      const the = await The.findByIdAndUpdate(req.params.id, req.body);
      await the.save();
      res.send(the);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete_The: async (req, res) => {
    try {
      const the = await The.findByIdAndDelete(req.params.id, req.body);
      if (!the) res.status(404).send("Khong tim thay the");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getTheByCT_TD: async (req, res) => {
    The.find({ MACT_TD: req.params.idCT_TD })
      .populate([
        {
          path: "MACT",
          select: "HOTEN",
        },
      ])
      .lean()
      .exec((error, the) => {
        if (error) res.send({ error });
        if (the) res.status(200).json(the);
      });
  },
};

module.exports = TheController;
