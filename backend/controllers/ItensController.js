const Itens = require("../models/Itens");

module.exports = class ItensControler {
  static async create(req, res) {
    const { name, barcode, unitprice, unit, stok } = req.body;

    //validation
    if (!name) {
      res.status(422).json({ message: "O nome é Obrigatorio" });
      return;
    }

    if (!barcode) {
      res.status(422).json({ message: "O codigo do item é Obrigatorio" });
      return;
    }

    if (typeof barcode !== "number") {
      res.status(422).json({ message: "O codigo deve ser um numero" });
      return;
    }

    const chekExitsBarcode = await Itens.findOne({ barcode: barcode });

    if (chekExitsBarcode) {
      res.status(422).json({ message: "Codigo de barras ja existe" });
      return;
    }

    if (!unit) {
      res.status(422).json({ message: "Preencha a unidade do item" });
      return;
    }
    if (!unitprice) {
      res.status(422).json({ message: "Preencha o preço do item" });
      return;
    }
    if (!stok) {
      res.status(422).json({ message: "A quatidade é obrigatoria" });
      return;
    }
    if (typeof stok !== "number") {
      res.status(422).json({ message: "O codigo deve ser um numero" });
      return;
    }

    // Create Item

    const item = new Itens({
      name,
      barcode,
      unit,
      unitprice,
      stok,
    });

    try {
      const newItem = await item.save();
      res.status(200).json({ message: "Item incluido com sucesso!" });
      return;
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async getAllItens(req, res) {
    const itens = await Itens.find().sort("name");

    res.status(200).json({
      itens: itens,
    });
  }
  static async getitembarcode(req, res) {
    console.log(req.params.id);
    const code = req.params.id;

    const item = await Itens.findOne({ barcode: code });

    res.status(200).json({
      item,
    });
  }
  static async gettItemId(req, res) {
    console.log(req.params.id);
    const id = req.params.id;

    const itemid = await Itens.findById({ _id: id });

    res.status(200).json({ message: itemid });
  }
  static async editItem(req, res) {
    const id = req.params.id;

    const Item = await Itens.findById(id);

    if (!Item) {
      res.status(401).json({ message: "Item não existe" });
      return;
    }

    const { name, barcode, unitprice, unit, stok } = req.body;

    console.log(typeof stok);

    if (Item) {
      (Item.name = name), (Item.unit = unit);
    }
    if (typeof barcode !== "number") {
      res.status(422).json({ message: "O codigo do item deve ser um numero!" });
      return;
    } else {
      Item.barcode = barcode;
    }

    if (typeof stok !== "number") {
      res
        .status(422)
        .json({ message: "A quantidade deve ser um numero real!" });
      return;
    } else {
      Item.stok = stok;
    }

    if (typeof unitprice !== "number") {
      res
        .status(422)
        .json({ message: "A quantidade deve ser um numero real!" });
      return;
    } else {
      Item.unitprice = unitprice;
    }

    try {
      const updatedItem = await Itens.findByIdAndUpdate(
        { _id: id },
        { $set: Item },
        { new: true }
      );
      res.status(200).json({ message: "Item atualizado com sucesso" });
      return;
    } catch (err) {
      res.status(500).json({ message: err });
      return;
    }
  }
  static async deleteItem(req, res) {
    const id = req.params.id;

    const checkItem = await Itens.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: "Item " + checkItem.name + " deletado com sucesso" });
  }
};
