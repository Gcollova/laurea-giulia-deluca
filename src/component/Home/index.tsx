import Header from "../Header";
import Renderer from "../Renderer";
import Sidebar from "../Sidebar";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <Header />
      </div>
      <div className={styles.main__wrapper}>
        <div className={styles.main__wrapper__sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main__wrapper__renderer}>
          <Renderer />
        </div>
      </div>
    </div>
  );
};

export default Home;
