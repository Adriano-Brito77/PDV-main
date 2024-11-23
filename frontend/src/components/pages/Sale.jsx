import styles from "./Sale.module.css";
import Navbar from "../layout/Navbar";
import InputSale from "../form/InputSale";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sale = () => {
  //propriedade dos itens
  const [description, setDescription] = useState(" ");
  const [barcode, setBarcode] = useState("0");
  const [unitprice, setUnitPrice] = useState(" ");
  const [unit, setUnit] = useState(" ");
  const [salebalance, setSaleBalance] = useState("");

  const [items, setItems] = useState("");

  //Propriedades da venda
  const [totalvalue, setTotalValue] = useState("");
  const [deduction, setDeduction] = useState("");
  const [add, setAdd] = useState("");
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
      setDescription(" ");
      setUnitPrice(" ");
      setUnit(" ");
    } else {
      setDescription(items.name);
      setUnitPrice(items.unitprice);
      setUnit(items.unit);
    }
  }, [items]);

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
              <p>Qtd</p>
              <p>Val unitario</p>
              <p>desconto</p>
              <p>acrescimo</p>
              <p>Total</p>
            </div>
            <div className={styles.item}>
              {items?.length > 0 &&
                items.map((item) => {
                  <span>{item.description}</span>;
                })}
              <span>teste1</span>
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
          <div className={styles.container_right}>
            <InputSale
              name="barcode"
              type="number"
              text="Codigo de barras"
              Onchange={(e) => {
                setBarcode(e.target.value);
              }}
            />
            <InputSale
              name="salebalance"
              type="number"
              text="Quantidade do item"
              Onchange={(e) => {
                setSaleBalance(e.target.value);
              }}
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
              name="deduction"
              type="string"
              text="Unidade"
              value={unit}
              disabled
            />
          </div>

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
