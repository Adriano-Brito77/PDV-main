import style from "./InputSale.module.css";

const InputSale = ({
  type,
  text,
  name,
  id,
  placeholder,
  Onchange,
  value,
  disabled,
  Ref,
  Step,
}) => {
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
        disabled={disabled}
        ref={Ref}
        step={Step}
      />
    </div>
  );
};

export default InputSale;
