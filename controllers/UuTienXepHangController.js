const UuTienXepHang = require("../models/UuTienXepHang");

const UuTienXepHangController = {
  post_UuTienXepHang: async (req, res) => {
    const uutien = new UuTienXepHang(req.body);
    try {
      await uutien.save();
      res.send(uutien);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get_list_UuTienXepHang: async (req, res) => {
    const uutien = await UuTienXepHang.find({});
    try {
      res.send(uutien);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  update_UuTienXepHang: async (req, res) => {
    try {
      const uutien = await UuTienXepHang.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      await uutien.save();
      res.send(uutien);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  delete_UuTienXepHang: async (req, res) => {
    try {
      const uutien = await UuTienXepHang.findByIdAndDelete(
        req.params.id,
        req.body
      );
      if (!uutien) res.status(404).send("Khong tim thay Uu tien xep hang");
      res.status(200).send();
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = UuTienXepHangController;
