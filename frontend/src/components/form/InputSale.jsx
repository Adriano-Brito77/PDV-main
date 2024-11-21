import style from "./InputSale.module.css";

const InputSale = ({ type, text, name, id, placeholder, Onchange, value,disabled }) => {
  return (
    <div className={style.container}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={Onchange}
        value={value}
        disabled = {disabled}
      />
    </div>
  );
};

export default InputSale;