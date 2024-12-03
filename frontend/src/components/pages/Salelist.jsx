import style from "./SaleList.module.css"

const Salelist = () => {

    const sale = [
		{
			numsales: 1,
			totalvalue:30,
			receive:0,
			change:0,
			username:"murilo"
		},{
			numsales: 1,
			totalvalue:30,
			receive:0,
			change:0,
			username:"murilo"
		}
	]
    const saleItens = [
          
            {
        "description":"Arroz",
        "barcode": 2080,
        "unitprice": 5.5,
        "unit":"UN",
        "salebalance": 1
        
            }
        ,
            {
        "name": "Coca 300ml",
        "barcode": 350,
        "unitprice": 5,
        "unit": "ML",
        "salebalance":1
            }
]



  return (
    <div className={style.container}>
        <div className={style.btn_sale}>
            <button>
              


            </button>
        </div>
        <div>
            <span>
                TESTE
            </span>
            </div>
    </div>
  )
}

export default Salelist