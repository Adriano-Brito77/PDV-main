import styles from "./Sale.module.css";
import Navbar from "../layout/Navbar";
import InputSale from '../form/InputSale'

const Sale = () => {
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
              <p>Total</p>
            </div>
            <div className={styles.item}>
              <span>teste</span>
              <span>teste2</span>
              <span>teste2</span>
            </div>
          </div>

          <div>
            <div className={styles.title_list}>
              <h1>Subtotal</h1>
            </div>
            <div className={styles.value}>
              <p>R$ 10,00</p>
            </div>
          </div>
        </div>

        <div className={styles.container_right}>
          <InputSale 
          name='barcode'
          type='number'
          text="codigo de barras"
         />
          <InputSale
          name='salebalance'
          type='number'
          text="Quantidade do item"
          />
          <InputSale
          name='description'
          type='number'
          text="Descrição do item"
          disabled
          />
          <InputSale
          name='unitprice'
          type='number'
          text="Preço Unitário"
          />
          <InputSale
          name='unit'
          type='number'
          text="Unidade"
          />
          <InputSale
          name='unit'
          type='number'
          text="Unidade"
          />
          <InputSale
          name='unit'
          type='number'
          text="Unidade"
          />
          <InputSale
          name='unit'
          type='number'
          text="Unidade"
          />
         
          
          

        </div>
      </div>
    </div>
  );
};

export default Sale;
