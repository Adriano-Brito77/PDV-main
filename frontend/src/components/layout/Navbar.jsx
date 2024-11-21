import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import car from "../../assets/img/carrogreen.jpg";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.container_nav}>
        <div className={styles.link}>
          <img src={car} />
          <Link>Itens</Link>
          <Link>Vendas</Link>
        </div>
        <div className={styles.user}>
          <Link>Usuario</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
