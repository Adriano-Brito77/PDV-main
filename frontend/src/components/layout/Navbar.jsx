import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import car from "../../assets/img/carrogreen.jpg";
import { Context } from "../../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const { authenticated } = useContext(Context);
  return (
    <div className={styles.nav}>
      {authenticated && (
        <div className={styles.container_nav}>
          <div className={styles.link}>
            <img src={car} />
            <Link to="/itens">Itens</Link>
            <Link to='/salelist'>Vendas</Link>
            <Link to="/sale">Vender</Link>
            <Link to="/teste">teste</Link>
          </div>
          <div className={styles.user}>
            <Link>Sair</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
