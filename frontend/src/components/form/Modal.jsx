import { useEffect, useState } from "react";
import style from "./Modal.module.css";
import Input from "./input";
import api from "../../utils/api";
import useFlashMessage from "../../hooks/useFlashMessage";

const Modal = ({ isOpen, setIsOpen, type, item }) => {
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");
  const [formData, setFormData] = useState({
    name: "",
    barcode: 0,
    unit: "",
    unitprice: 0,
    stok: 0,
  });

  useEffect(() => {
    if (type === "edit" && item) {
      setFormData(item);
    } else if (type === "add") {
      setFormData({
        name: "",
        barcode: "",
        unit: "",
        unitprice: "",
        stok: "",
      });
    }
  }, [item, type]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const numericFields = ["stok", "unitprice", "barcode"];
    setFormData({
      ...formData,
      [name]: numericFields.includes(name) ? parseFloat(value) || 0 : value,
    });
  };

  console.log(formData);

  const handleSubmit = async () => {
    try {
      if (type === "add") {
        const response = await api.post("itens/create", formData, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
            "Content-Type": "application/json",
          },
        });

        setFormData({
          name: "",
          barcode: "",
          unit: "",
          unitprice: "",
          stok: "",
        });
      } else if (type === "edit") {
        const response = await api.patch(
          `itens/edititem/${item._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
              "Content-Type": "application/json",
            },
          }
        );
      }
    } catch (error) {
      console.error("Erro ao salvar o item:", error);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={style.container}>
          <div className={style.modal}>
            <Input
              text="Descrição do item"
              type="string"
              name="name"
              placeholder="Descrição do item"
              Onchange={handleChange}
              value={formData.name || ""}
            />
            <Input
              text="Código de Barras"
              type="number"
              name="barcode"
              placeholder="Digite o código de barras"
              Onchange={handleChange}
              value={formData.barcode || ""}
            />
            <Input
              text="Unidade"
              type="string"
              name="unit"
              placeholder="Digite a unidade do item"
              Onchange={handleChange}
              value={formData.unit || ""}
            />
            <Input
              text="Preço"
              type="number"
              name="unitprice"
              placeholder="Digite o preço do item"
              Onchange={handleChange}
              value={formData.unitprice || ""}
            />
            <Input
              text="Quantidade do item"
              type="number"
              name="stok"
              placeholder="Digite a quantidade do item"
              Onchange={handleChange}
              value={formData.stok || ""}
            />
            <div className={style.container_button}>
              <button onClick={handleSubmit}>
                {type === "add" ? "Adicionar" : "Salvar Alterações"}
              </button>
              <button onClick={() => setIsOpen(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
