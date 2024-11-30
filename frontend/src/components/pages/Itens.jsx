import { useEffect, useState } from "react";
import styles from "./Itens.module.css";
import { CgCloseR } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import api from "../../utils/api";

const Itens = () => {
  const [items, setItens] = useState([]);

  useEffect(() => {
    try {
      api.get("itens/allitens").then((response) => {
        return setItens(response.data.itens);
      });
      console.log(items);
    } catch (error) {}
  }, []);

  return (
    <div>
      <div className={styles.container_itens}>
        <div className={styles.btn}>
          <button to="/modal">Cadastrar</button>
        </div>
        <div className={styles.title}>
          <h1>Itens</h1>
        </div>
      </div>
      <div className={styles.container_list}>
        {items.map((items) => (
          <div className={styles.list}>
            <span key={items._id}>
              <label>Descrição:</label>
              <p>{items.name}</p>
            </span>
            <span>
              <label>Cod. Barras:</label>
              <p>{items.barcode}</p>
            </span>
            <CgCloseR />
            <span>
              <label>Unidade:</label>
              <p>{items.unit}</p>
            </span>
            <span>
              <label>Valor unitario: </label>
              <p>{items.unitprice}</p>
            </span>
            <FiEdit3 />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itens;
