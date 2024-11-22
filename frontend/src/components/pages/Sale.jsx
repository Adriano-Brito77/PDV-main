import styles from "./Sale.module.css";
import Navbar from "../layout/Navbar";
import InputSale from "../form/InputSale";
import api from "../../utils/api";
import { useState } from "react";

const Sale = () => {
  //propriedade dos itens
  const [description, setdescription] = useState("");
  const [barcode, setbarcode] = useState({});
  const [unitprice, setunitprice] = useState("");
  const [unit, setunit] = useState("");
  const [salebalance, setsalebalance] = useState("");

  const [items, setitems] = useState([]);

  //Propriedades da venda
  const [totalvalue, settotalvalue] = useState("");
  const [deduction, setdeduction] = useState("");
  const [add, setadd] = useState("");
  const [receive, setreceive] = useState("");
  const [change, setchange] = useState("");

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
              <span>teste</span>
              <span>teste2</span>
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

        <div className={styles.container_right}>
          <InputSale name="barcode" type="number" text="Codigo de barras" />
          <InputSale
            name="salebalance"
            type="number"
            text="Quantidade do item"
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
            name="deduction"
            type="number"
            text="Desconto"
            value={deduction}
          />
          <InputSale name="add" type="number" text="Acrescimo" value={add} />
          <InputSale
            name="receive"
            type="number"
            text="Valor recebido"
            value={receive}
          />
          <InputSale
            name="change"
            type="number"
            text="Troco"
            value={change}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Sale;
