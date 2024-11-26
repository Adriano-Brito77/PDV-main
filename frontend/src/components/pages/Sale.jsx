import styles from "./Sale.module.css";
import Navbar from "../layout/Navbar";
import InputSale from "../form/InputSale";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sale = () => {
  //propriedade dos itens
  const [description, setDescription] = useState("");
  const [barcode, setBarcode] = useState("");
  const [unitprice, setUnitPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [salebalance, setSaleBalance] = useState("");

  const [items, setItems] = useState({});
  const [sale, setSale] = useState([]);
  const [numItem, setNumItem] = useState(0);

  //Propriedades da venda
  const [totalvalue, setTotalValue] = useState("");
  const [receive, setReceive] = useState("");
  const [change, setChange] = useState("");

  useEffect(() => {
    if (barcode) {
      api.get(`itens/getitembarcode/${barcode}`).then((response) => {
        return setItems(response.data.item);
      });
    }
  }, [barcode]);

  useEffect(() => {
    if (!items || items === null || items === undefined || items === " ") {
      setDescription("");
      setUnitPrice("");
      setUnit("");
    } else {
      setDescription(items.name);
      setUnitPrice(items.unitprice);
      setUnit(items.unit);
    }
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextNumItem = numItem + 1;
    setNumItem(nextNumItem);

    setSale([
      ...sale,
      { ...items, salebalance: salebalance, numitem: numItem + 1 },
    ]);
    setDescription("");
    setUnitPrice("");
    setUnit("");
    setBarcode("");
    setSaleBalance("");
  };

  console.log(sale);

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.container_central}>
        <div className={styles.container_left}>
          <div className={styles.productlist}>
            <div className={styles.title_productlist}>
              <h1>Lista de Produtos</h1>
            </div>
            <div className={styles.title}>
              <p>N°item</p>
              <p>Descrição</p>
              <p>Codigo b.</p>
              <p>Un</p>
              <p>Qtd</p>
              <p>Val unitario</p>
              <p>Total</p>
            </div>
            <div className={styles.item}>
              {sale.map((items) => (
                <span key={items._id}>
                  <p>{items.numitem}</p>
                  <p>{items.name}</p>
                  <p>{items.barcode}</p>
                  <p>{items.unit}</p>
                  <p>{items.unitprice}</p>
                  <p>{items.salebalance}</p>
                  <p>{items.unitprice * items.salebalance}</p>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.title_list}>
            <InputSale
              name="totalvalue"
              type="number"
              text="Total da venda"
              value={totalvalue}
              disabled
            />
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className={styles.container_right}>
            <InputSale
              name="barcode"
              type="number"
              text="Codigo de barras"
              Onchange={(e) => {
                setBarcode(e.target.value);
              }}
              value={barcode}
            />
            <InputSale
              name="salebalance"
              type="number"
              text="Quantidade do item"
              Onchange={(e) => {
                setSaleBalance(e.target.value);
              }}
              value={salebalance}
            />
            <InputSale
              name="description"
              type="text"
              text="Descrição do item"
              value={description}
              disabled
            />
            <InputSale
              name="unitprice"
              type="number"
              text="Preço Unitário"
              value={unitprice}
              disabled
            />
            <InputSale
              name="unit"
              type="string"
              text="Unidade"
              value={unit}
              disabled
            />

            <button>Registrar</button>
          </form>

          <div className={styles.container_right}>
            <InputSale name="receive" type="number" text="Valor recebido" />
            <InputSale name="change" type="number" text="Troco" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
