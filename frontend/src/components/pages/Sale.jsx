import styles from "./Sale.module.css";
import Navbar from "../layout/Navbar";

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
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Sale;
