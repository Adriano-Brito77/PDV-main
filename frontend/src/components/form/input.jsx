import style from "./input.module.css";

const Input = ({
  type,
  text,
  name,
  id,
  placeholder,
  Onchange,

  value,
}) => {
  return (
    <div className={style.container}>
      <label className={style.label_input} htmlFor={name}>
        {text}:
      </label>
      <input
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
