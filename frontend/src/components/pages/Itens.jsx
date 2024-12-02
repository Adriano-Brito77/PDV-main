import { useEffect, useState } from "react";
import styles from "./Itens.module.css";
import { CgCloseR } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import api from "../../utils/api";
import Modal from "../form/Modal";

const Itens = () => {
  const [token] = useState(localStorage.getItem("token") || "");
  const [items, setItens] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modaltype, setModalType] = useState("add");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    try {
      api.get("itens/allitens").then((response) => {
        return setItens(response.data.itens);
      });
    } catch (error) {}
  }, [isOpen]);

  const openModal = (type, item = null) => {
    setIsOpen(true);
    setModalType(type);
    setSelectedItem(item);
  };

  const deleteItem = async (item) => {
    try {
      await api.delete(`itens/delete/${item._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json",
        },
      });
      setItens((prevItems) => prevItems.filter((i) => i._id !== item._id));
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  };

  return (
    <div>
      <div className={styles.container_itens}>
        <div className={styles.btn}>
          <button
            className={styles.button_modal}
            onClick={() => openModal("add")}
          >
            Cadastrar
          </button>
          <Modal
            isOpen={isOpen}
            setIsOpen={() => setIsOpen(!isOpen)}
            type={modaltype}
            item={selectedItem}
          />
        </div>
        <div className={styles.title}>
          <h1>Itens</h1>
        </div>
      </div>
      <div className={styles.container_list}>
        {items.map((item) => (
          <div key={item._id} className={styles.list}>
            <span>
              <label>Descrição : </label>
              <p>{item.name}</p>
            </span>
            <span>
              <label>Cod. Barras:</label>
              <p>{item.barcode}</p>
            </span>
            <CgCloseR onClick={() => deleteItem(item)} />
            <span>
              <label>Unidade:</label>
              <p>{item.unit}</p>
            </span>
            <span>
              <label>Valor unitario: </label>
              <p>{item.unitprice}</p>
            </span>
            <span>
              <label>Estoque: </label>
              <p>{item.stok}</p>
            </span>
            <span>
              <label> </label>
              <p></p>
            </span>
            <FiEdit3 onClick={() => openModal("edit", item)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itens;
