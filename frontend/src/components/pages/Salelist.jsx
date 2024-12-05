import { useState } from "react";
import style from "./SaleList.module.css";

const Salelist = () => {
  const salelist = [
    {
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
  ];

  const [visibleSales, setVisibleSales] = useState(false);

  const togllevisibleSales = () => {};

  return (
    <div className={style.container_sale_list}>
      <div className={visibleSales ? style.sale : style.sale_test}>
        {salelist.map((sale) => (
          <button onClick={() => setVisibleSales(!visibleSales)}>
            <div className={style.info_sale}>
              <span key={sale._id}>
                <p>Numero da venda: {sale.numsales}</p>
                <p>Vendedor: {sale.username}</p>
                <p>Valor total: {sale.totalvalue}</p>
                <p>Valor recebido: {sale.receive}</p>
                <p>Troco: {sale.change}</p>
              </span>
            </div>
            <div
              className={
                visibleSales ? style.sale_itens : style.sale_itens_test
              }
            >
              {sale.itens.map((itens) =>
                itens.items.map((items) => (
                  <span key={items._id}>
                    <p>Num Item: {items.numitem}</p>
                    <p>Cod. Barras: {items.barcode}</p>
                    <p>Descrição: {items.name}</p>
                    <p>Preço unitário: {items.unitprice}</p>
                    <p>Unidade: {items.unit}</p>
                    <p>Qtd. vendida: {items.salebalance}</p>
                  </span>
                ))
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Salelist;
