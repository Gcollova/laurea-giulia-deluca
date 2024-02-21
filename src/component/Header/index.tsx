import styles from "./styles.module.scss";
import logo from "../media/main-logo-white.png";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__logo_wrapper}>
        <img src={logo} alt="log" />
      </div>
      <div className={styles.main__title_wrapper}>
        BANCA DATI CLEDU
      </div>
    </div>
  );
};

export default Header;
