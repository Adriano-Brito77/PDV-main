import style from "./input.module.css";

const Input = ({ type, text, name, id, placeholder, Onchange, value }) => {
  return (
    <div className={style.container} autoComplete="off">
      <label htmlFor={name}>{text}:</label>
      <input
        autoComplete="off"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={Onchange}
        value={value}
        
      />
    </div>
  );
};

export default Input;
