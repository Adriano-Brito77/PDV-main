const Sale = require("../models/Sale");
const SaleItems = require("../models/SaleItems");

module.exports = class SaleController {
  static async register(req, res) {
    const { grossvalue, deduction, add, totalvalue } = req.body;
    const { name } = req.user;
    const Item = req.body.items;

    if (typeof grossvalue !== "number") {
      res.status(422).json({ message: "Os valor bruto dever ser um numero " });
      return;
    }
    if (typeof deduction !== "number") {
      res.status(422).json({ message: "O desconto deve ser um numero " });
      return;
    }
    if (typeof add !== "number") {
      res.status(422).json({ message: "O acréscimo dever ser um numero " });
      return;
    }
    if (typeof totalvalue !== "number") {
      res.status(422).json({ message: "Os valor total dever ser um numero " });
      return;
    }

    // validar se existe venda
    const salenum = await Sale.findOne().sort({ numsales: -1 }).limit(1);

    let numbersales;
    //incrementar numero da venda
    if (salenum === null) {
      numbersales = 1;
    } else {
      numbersales = salenum.numsales + 1;
    }

    const sale = new Sale({
      numsales: numbersales,
      grossvalue,
      deduction,
      add,
      totalvalue,
      username: name,
    });

    const saleitem = new SaleItems({
      numsales: numbersales,
      items: Item,
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
