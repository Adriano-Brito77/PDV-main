import { useEffect, useState } from "react";
import styles from "./Itens.module.css";
import { CgCloseR } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import Modal from "../form/Modal";
const Itens = () => {
  const [items, setItens] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      api.get("itens/allitens").then((response) => {
        return setItens(response.data.itens);
      });
    } catch (error) {}
  }, [items]);

  return (
    <div>
      <div className={styles.container_itens}>
        <div className={styles.btn}>
          <button
            className={styles.button_modal}
            onClick={() => setIsOpen(true)}
          >
            Cadastrar
          </button>

          <Modal
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
            buttonname="Cadastrar"
          />
        </div>
        <div className={styles.title}>
          <h1>Itens</h1>
        </div>
      </div>
      <div className={styles.container_list}>
        {items.map((items) => (
          <div key={items._id} className={styles.list}>
            <span>
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
