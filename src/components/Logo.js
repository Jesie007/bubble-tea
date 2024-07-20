import styles from "./Logo.module.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
    </div>
  );
}

export default Logo;
