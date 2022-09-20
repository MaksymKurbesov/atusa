import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const setActiveClass = ({ isActive }) =>
  isActive ? `${styles.activeLink}` : "";

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <img
          className={styles.logotype}
          src={Logo}
          alt={`Логотип`}
          height={90}
        />
        <nav>
          <NavLink to="/" className={setActiveClass}>
            Головна
          </NavLink>
          <NavLink to="/events" className={setActiveClass}>
            Події
          </NavLink>
          <NavLink to="/news" className={setActiveClass}>
            Новини
          </NavLink>
          <NavLink to="/music" className={setActiveClass}>
            Музика
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
