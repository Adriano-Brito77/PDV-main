import { useState } from "react";
import style from "./SaleList.module.css";

const Salelist = () => {
  const salelist = [
    {
      _id: 1,
      numsales: 1,
      totalvalue: 30,
      receive: 0,
      change: 0,
      username: "murilo",
      itens: [
        {
          _id: "674f14dbd4a66fe9957622ea",
          numsales: 1,
          items: [
            {
              _id: "67472817dd85f6110115f935",
              name: "Frango",
              barcode: 6969,
              unitprice: 20,
              unit: "KG",
              stok: 100,
              createdAt: "2024-11-27T14:09:27.151Z",
              updatedAt: "2024-11-27T14:09:27.151Z",
              __v: 0,
              salebalance: "1",
              numitem: 1,
            },
            {
              _id: "6733543c03c1c341d4324566",
              name: "Coca 300ml",
              barcode: 1010,
              unit: "ML",
              amount: 20,
              createdAt: "2024-11-12T13:12:28.782Z",
              updatedAt: "2024-12-03T12:56:01.705Z",
              __v: 0,
              stok: 100,
              unitprice: 10,
              salebalance: "1",
              numitem: 2,
            },
          ],
          createdAt: "2024-12-03T14:25:31.039Z",
          updatedAt: "2024-12-03T14:25:31.039Z",
          __v: 0,
        },
      ],
    },
    {
      _id: 2,
      numsales: 2,
      totalvalue: 30,
      receive: 0,
      change: 0,
      username: "Adriano",
      itens: [
        {
          _id: "674f14dbd4a66fe9957622ea",
          numsales: 2,
          items: [
            {
              _id: "67472817dd85f6110115f935",
              name: "pepsi",
              barcode: 6969,
              unitprice: 20,
              unit: "KG",
              stok: 100,
              createdAt: "2024-11-27T14:09:27.151Z",
              updatedAt: "2024-11-27T14:09:27.151Z",
              __v: 0,
              salebalance: "1",
              numitem: 1,
            },
            {
              _id: "6733543c03c1c341d4324566",
              name: "Coca 300ml",
              barcode: 1010,
              unit: "ML",
              amount: 20,
              createdAt: "2024-11-12T13:12:28.782Z",
              updatedAt: "2024-12-03T12:56:01.705Z",
              __v: 0,
              stok: 100,
              unitprice: 10,
              salebalance: "1",
              numitem: 2,
            },
          ],
          createdAt: "2024-12-03T14:25:31.039Z",
          updatedAt: "2024-12-03T14:25:31.039Z",
          __v: 0,
        },
      ],
    },
  ];

  const [visible, setVisible] = useState([]);

  const toggleExpand = (id) => {
    setVisible((prev) =>
      prev.includes(id) ? prev.filter((items) => items !== id) : [...prev, id]
    );
  };

  return (
    <div className={style.container_sale_list}>
      <div className={style.card_sale}>
        {salelist.map((sale) => {
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
