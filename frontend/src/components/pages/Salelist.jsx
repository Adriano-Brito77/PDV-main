import style from "./SaleList.module.css";

const Salelist = () => {
  const sales = [
    {
      numsales: 1,
      totalvalue: 30,
      receive: 0,
      change: 0,
      username: "murilo",
    },
    {
      numsales: 2,
      totalvalue: 30,
      receive: 0,
      change: 0,
      username: "murilo",
    },
  ];
  const saleItens = {
    numsales: 1,
    items: [
      {
        description: "Arroz",
        barcode: 2080,
        unitprice: 5.5,
        unit: "UN",
        salebalance: 1,
      },
      {
        name: "Coca 300ml",
        barcode: 350,
        unitprice: 5,
        unit: "ML",
        salebalance: 1,
      },
    ],
  };

  return (
    <div className={style.container_sale_list}>
      <div className={style.btn_sale}>
        {sales.map((sale) => (
          <button>
            <span>
              Numero da venda: <p>{sale.numsales}</p>
            </span>
            <span>
              Vendedor: <p>{sale.username}</p>
            </span>
            <span>
              Valor total: <p>{sale.totalvalue}</p>
            </span>
            <span>
              Valor recebido: <p>{sale.receive}</p>
            </span>
            <span>
              Troco: <p>{sale.change}</p>
            </span>
          </button>
        ))}

        {<span>{saleItens.items.map((itens) => itens.barcode)}</span>}
      </div>
      <div className={style.itens_list}></div>
    </div>
  );
};

export default Salelist;
