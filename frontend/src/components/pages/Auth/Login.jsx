import { useState } from "react";
import Input from "../../form/input";
import logo from "../../../assets/img/car.png";
import style from "../Auth/Login.module.css";
import {Link }from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <section className={style.section}>
      <img src={logo} alt="teste" className={style.img} />
      <div className={style.login}>
        <div className={style.titulo}>
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit} autoComplete="no">
          <Input
            name="e-mail"
            text="E-mail"
            type="name"
            placeholder="E-mail"
            Onchange={handleChange}
          />
          <Input
            name="senha"
            text="Senha"
            type="password"
            placeholder="Senha"
            Onchange={handleChange}
          />
          <div className={style.pa}>
            <Link>Esqueceu a senha?</Link>
            <Link to="/register" >Criar sua conta</Link>
          </div>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    </section>
  );
};

export default Login;
