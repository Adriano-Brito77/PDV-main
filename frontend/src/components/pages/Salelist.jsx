import style from "./SaleList.module.css";

const Salelist = () => {
  const Salelist= [
        {
            "numsales": 1,
            "totalvalue": 30,
            "receive": 0,
            "change": 0,
            "username": "murilo",
            "itens": [
                {
                    "_id": "674f14dbd4a66fe9957622ea",
                    "numsales": 1,
                    "items": [
                        {
                            "_id": "67472817dd85f6110115f935",
                            "name": "Frango",
                            "barcode": 6969,
                            "unitprice": 20,
                            "unit": "KG",
                            "stok": 100,
                            "createdAt": "2024-11-27T14:09:27.151Z",
                            "updatedAt": "2024-11-27T14:09:27.151Z",
                            "__v": 0,
                            "salebalance": "1",
                            "numitem": 1
                        },
                        {
                            "_id": "6733543c03c1c341d4324566",
                            "name": "Coca 300ml",
                            "barcode": 1010,
                            "unit": "ML",
                            "amount": 20,
                            "createdAt": "2024-11-12T13:12:28.782Z",
                            "updatedAt": "2024-12-03T12:56:01.705Z",
                            "__v": 0,
                            "stok": 100,
                            "unitprice": 10,
                            "salebalance": "1",
                            "numitem": 2
                        }
                    ],
                    "createdAt": "2024-12-03T14:25:31.039Z",
                    "updatedAt": "2024-12-03T14:25:31.039Z",
                    "__v": 0
                }
            ]
        }]

     
        
  return (
    <div className={style.container_sale_list}>
      <div className={style.btn_sale}>
        {Salelist.map((sale) => (
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

            
            <footer>
           {(Salelist.map(itens => 
            itens.itens.map(items=> 
            items.items.map(item=> (
              <span>
                <p>Num Item: {item.numitem}</p>
                <p>Cod. Barras: {item.barcode}</p>
                <p>Dscrição: {item.name}</p>
                <p>Preço unitário: {item.unitprice}</p>
                <p>Unidade: {item.unit}</p>
                <p>Qtd. vendida: {item.salebalance}</p>
              </span>

)))))}
            </footer>
          </button>
        ))}
        

       
      </div>
      <div className={style.itens_list}></div>
    </div>
  );
};

export default Salelist;
