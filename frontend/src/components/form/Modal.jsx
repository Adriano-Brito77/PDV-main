import style from "./Modal.module.css";
import Input from "./input";

const Modal = ({ isOpen, buttonname, setIsOpen }) => {
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
            />
            <Input
              text="Codigo de barras"
              type="number"
              name="barcode"
              placeholder="Digite o codigo de barras"
            />
            <Input
              text="Unidade"
              type="string"
              name="unit"
              placeholder="Digite a unidade do item"
            />
            <Input
              text="Preço"
              type="number"
              name="unitprice"
              placeholder="Digite o preço do item"
            />
            <Input
              text="Quantidade do item"
              type="number"
              name="stok"
              placeholder="Digite a quantidade do item"
            />
            <div className={style.container_button}>
              <button>{buttonname}</button>
              <button onClick={setIsOpen}>fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
