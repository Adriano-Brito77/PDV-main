import styles from "./Sale.module.css";
import Navbar from "../layout/Navbar";
import InputSale from "../form/InputSale";
import api from "../../utils/api";
import { useEffect, useState, useRef } from "react";

const Sale = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const inputRef = useRef(null);
  const iref = useRef(null);
  const [name, setname] = useState("");
  const [barcode, setBarcode] = useState("");
  const [unitprice, setUnitPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [salebalance, setSaleBalance] = useState("");
  const [placeholder, setPlaceHolder] = useState("");

  const [items, setItems] = useState({});
  const [sale, setSale] = useState([]);
  const [numItem, setNumItem] = useState(0);

  const [receive, setReceive] = useState(0);
  const [change, setChange] = useState(0);

  const totalvalue = sale.reduce(
    (total, item) => total + item.unitprice * item.salebalance,
    0
  );

  useEffect(() => {
    if (barcode) {
      api.get(`itens/getitembarcode/${barcode}`).then((response) => {
        return setItems(response.data.item);
      });
    }
  }, [barcode]);

  useEffect(() => {
    if (!items || items === null || items === undefined || items === " ") {
      setname("");
      setUnitPrice("");
      setUnit("");
    } else {
      setname(items.name);
      setUnitPrice(items.unitprice);
      setUnit(items.unit);
    }
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!salebalance) {
      iref.current.focus();
      setPlaceHolder("Digite uma quantidade...");
      return;
    }

    const nextNumItem = numItem + 1;
    setNumItem(nextNumItem);

    setSale([
      ...sale,
      { ...items, salebalance: salebalance, numitem: numItem + 1 },
    ]);

    setname("");
    setUnitPrice("");
    setUnit("");
    setBarcode("");
    setSaleBalance("");
    setPlaceHolder("");
  };

  const saleitens = {
    totalvalue: totalvalue,
    receive: receive,
    change: change,
    items: sale,
  };
  const finishSale = async (e) => {
    e.preventDefault();
    await api.post(
      "sales/sale",
      saleitens,

      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      }
    );
    window.location.reload();
  };

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
              <p>Unidade</p>
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

          <form onSubmit={finishSale} className={styles.title_list}>
            <button>Finalizar venda</button>
            <InputSale
              name="totalvalue"
              type="number"
              text="Total da venda"
              value={totalvalue}
              disabled
            />
          </form>
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
              placeholder={placeholder}
              Onchange={(e) => {
                setSaleBalance(e.target.value);
              }}
              value={salebalance}
              Ref={iref}
            />
            <InputSale
              name="name"
              type="text"
              text="Descrição do item"
              value={name}
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

            <button>Registrar item</button>
          </form>

          <div className={styles.container_right}>
            <InputSale
              name="receive"
              type="number"
              text="Valor recebido"
              Onchange={(e) => {
                setReceive(e.target.value);
              }}
              value={receive}
              Step=".01"
              Ref={inputRef}
            />

            <InputSale name="change" type="number" text="Troco" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
