import { useEffect, useState } from "react";
import style from "./SaleList.module.css";
import api from "../../utils/api";

const Salelist = () => {
  const [saleList, setSaleList] = useState([]);
  const [visible, setVisible] = useState([]);

  console.log(saleList);

  const toggleExpand = (id) => {
    setVisible((prev) =>
      prev.includes(id) ? prev.filter((items) => items !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    api.get("sales/salelist").then((response) => {
      return setSaleList(response.data.Salelist);
    });
  }, []);

  return (
    <div className={style.container_sale_list}>
      <div className={style.card_sale}>
        {saleList.map((sale) => {
          const isActive = visible.includes(sale._id);
          return (
            <div
              key={sale._id}
              className={`${style.sale_list} ${isActive ? style.expanded : ""}`}
            >
              <div className={style.sale}>
                <button
                  className={style.btn}
                  onClick={() => toggleExpand(sale._id)}
                >
                  Ver itens
                </button>
                <span>
                  <p>Numero da venda:{sale.numsales}</p>
                  <p>Vendedor: {sale.username}</p>
                  <p>Total da venda: {sale.totalvalue}</p>
                  <p>Total recebido:{sale.receive}</p>
                  <p>Troco: {sale.change}</p>
                </span>
              </div>
              <div className={style.itens}>
                {sale.itens.map((itens) =>
                  itens.items.map((item) => (
                    <footer key={item._id}>
                      <p>Descrição:{item.name}</p>
                      <p>Cod. barras: {item.barcode}</p>
                      <p>Preço unitario: {item.unitprice}</p>
                      <p>Unidade:{item.unit}</p>
                      <p>Quantidade vendida: {item.salebalance}</p>
                    </footer>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salelist;
