const Sale = require("../models/Sale");
const SaleItems = require("../models/SaleItems");

module.exports = class SaleController {
  static async register(req, res) {
    let numbersales;

    const { grossvalue, deduction, add, totalvalue } = req.body;
    const { name } = req.user;
    const { description, barcode, unit, salebalance } = req.body.items;

    const salenum = await Sale.findOne().sort({ numsales: -1 }).limit(1);

    if (salenum === null) {
      numbersales = 1;
    } else {
      numbersales = salenum.numsales + 1;
    }

    const numsales = numbersales;

    const sale = new Sale({
      numsales,
      grossvalue,
      deduction,
      add,
      totalvalue,
      username: name,
    });

    const saleitem = new SaleItems({
      numsales,
      item: {
        description,
        barcode,
        unit,
        salebalance,
      },
    });

    try {
      const newSale = await sale.save();
      const newSaleItem = await saleitem.save();
      res.status(200).json({ message: "Venda concluida com sucesso" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};
