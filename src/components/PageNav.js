import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>

        <li>
          <NavLink to="/about">About us</NavLink>
        </li>

        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>

        <li>
          <NavLink to="/store">Stores</NavLink>
        </li>

        <li>
          <NavLink to="/order">Order online</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
