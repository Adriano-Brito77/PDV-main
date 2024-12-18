const Sale = require("../models/Sale");
const SaleItems = require("../models/SaleItems");

module.exports = class SaleController {
  static async register(req, res) {
    const { totalvalue, receive, change } = req.body;
    const { name } = req.user;
    const Item = req.body.items;
    console.log(typeof receive);

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

    const numsales = numbersales;
    console.log(numsales);

    const sale = new Sale({
      numsales,
      totalvalue,
      receive,
      change,
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

  static async getItensSales(req, res) {
    const sales = await Sale.find().sort("numsales");
    const itens = await SaleItems.find().sort("numsales");
    console.log(sales);

    const Salelist = sales.map((sale) => {
      return {
        _id: sale._id,
        numsales: sale.numsales,
        totalvalue: sale.totalvalue,
        receive: sale.receive,
        change: sale.change,
        username: sale.username,
        itens: itens.filter((item) => item.numsales === sale.numsales),
      };
    });

    res.status(200).json({ Salelist });
  }
};
