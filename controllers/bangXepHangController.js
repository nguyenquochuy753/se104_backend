const BangXepHangModel = require("../models/BangXepHang");

const bangXepHangController = {
  readBangXepHang: async (req, res) => {
    try {
      const BangXepHangs = await BangXepHangModel.find({
        MAMG: req.params.idMG,
      });
      res.status(200).json(BangXepHangs);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  readBXHByCLB: async (req, res) => {
    try {
      const BangXepHangs = await BangXepHangModel.find({
        MAMG: req.params.idMG,
        MACLB: req.params.idCLB,
      });
      res.status(200).json(BangXepHangs);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  addBangXepHang: async (req, res) => {
    try {
      BangXepHangModel.findOne({
        MACLB: req.body.MACLB,
      }).exec((err, bxh) => {
        if (err) console.log(err);
        // if (bxh) {
        //   BangXepHangModel.findOneAndUpdate(
        //     { MACLB: req.body.MACLB },
        //     {
        //       $set: {
        //         MAMG: req.body.MAMG,
        //         TENCLB: req.body.TENCLB,
        //         $inc: { TRANDACHOI: 1 },
        //         $inc:
        //           kq === "thang"
        //             ? { THANG: 1 }
        //             : kq === "hoa"
        //             ? { HOA: 1 }
        //             : { THUA: 1 },
        //         $inc: { BANTHANG: req.body.BANTHANG },
        //         $inc: { BANTHUA: req.body.BANTHUA },
        //         // HIEUSO: BANTHANG - BANTHUA,
        //         // DIEM:
        //         //   req.body.HSTHANG * THANG +
        //         //   req.body.HSHOA * HOA +
        //         //   req.body.HSTHUA * THUA,
        //       },
        //     }
        //   ).exec((err, bxh) => {
        //     if (err) return res.status(400).json(err);
        //     if (bxh) return res.status(201).json(bxh);
        //   });
        // } else {
        const ct_td = new BangXepHangModel(req.body);
        ct_td.save((err, ct) => {
          if (err) return res.status(400).json(err);
          if (ct) return res.status(201).json(ct);
        });
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateBangXepHang: async (req, res) => {
    try {
      const bangxephang = await BangXepHangModel.findOneAndUpdate(
        { MACLB: req.params.idCLB },
        req.body
        // {
        // TRANDACHOI: 1,
        // $inc:
        //   kq === "thang"
        //     ? { THANG: 1 }
        //     : kq === "hoa"
        //     ? { HOA: 1 }
        //     : { THUA: 1 },
        // $inc: { BANTHANG: req.body.BANTHANG },
        // $inc: { BANTHUA: req.body.BANTHUA },
        // }
      );
      await bangxephang.save();
      res.status(200).json(bangxephang);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteBangXepHang: async (req, res) => {
    try {
      await BangXepHangModel.findByIdAndDelete(req.body._id);
      res.status(200).json("Xóa thành công");
    } catch (error) {
      res.status(500).json("Xóa thất bại");
    }
  },
  sort: async (req, res) => {
    try {
      const sortBangXepHang = await BangXepHangModel.find().sort({
        DIEM: -1,
        HIEUSO: -1,
      });
      res.status(200).json(sortBangXepHang);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bangXepHangController;
