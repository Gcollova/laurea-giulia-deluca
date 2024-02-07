import styles from "./styles.module.scss";
import fake_data from "../../fake_data/assistiti.json";
import { Assistito } from "../../models/assistito";
import { useContext } from "react";
import { MainContext } from "../../context/main";
const Sidebar = () => {
  const assistiti: Assistito[] = fake_data;
  const { setAssistito } = useContext(MainContext);
  const renderAssistiti = () => {
    return assistiti.map((assistito, index) => {
      return (
        <div
          key={assistito.nr_pratica}
          className={styles.assistito}
          onClick={() => setAssistito(assistito)}
        >
          <div className={styles.assistito__info}>
            <span>{`${assistito.nome} ${assistito.cognome}`}</span>
            <span>{`${assistito.data_prima_consultazione}`}</span>
          </div>
          <div className={styles.assistito__pratica}>
            <span>{`Nr pratica: ${assistito.nr_pratica}`}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <h3>Pratiche</h3>
      </div>
      <div className={styles.main__wrapper}>{renderAssistiti()}</div>
      <div className={styles.main__button_wrapper}>
        <button onClick={() => setAssistito(undefined)}>NUOVA PRATICA</button>
      </div>
    </div>
  );
};

export default Sidebar;
