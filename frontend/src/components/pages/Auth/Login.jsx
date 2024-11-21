import { useContext, useState } from "react";
import Input from "../../form/input";
import logo from "../../../assets/img/car.png";
import style from "../Auth/Login.module.css";
import { Link } from "react-router-dom";
import Context from "../../../context/UserContext";

const Login = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section className={style.section}>
      <img src={logo} className={style.img} />
      <div className={style.login}>
        <div className={style.titulo}>
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            text="E-mail"
            type="email"
            placeholder="E-mail"
            Onchange={handleChange}
          />
          <Input
            name="password"
            text="Senha"
            type="password"
            placeholder="Senha"
            Onchange={handleChange}
          />
          <div className={style.pa}>
            <Link>Esqueceu a senha?</Link>
            <Link to="/register">Criar sua conta</Link>
          </div>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </section>
  );
};

export default Login;
