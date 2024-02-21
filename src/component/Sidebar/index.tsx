import styles from "./styles.module.scss";
import fake_data from "../../fake_data/assistiti.json";
import { Assistito } from "../../models/assistito";
import { useContext, useEffect } from "react";
import { MainContext } from "../../context/main";
const Sidebar = () => {
  const assistiti: Assistito[] = fake_data;
  const { setAssistito,assistito, } = useContext(MainContext);

  
  
  const renderAssistiti = () => {
    return assistiti.map((assist, index) => {
      return (
        <div
          key={assist.nr_pratica}
          className={`${styles.assistito} ${assist === assistito && styles.assistito_selected}`}
          onClick={() => {setAssistito(assist);}}
        >
          <div className={styles.assistito__info}>
            <span>{`${assist.nome} ${assist.cognome}`}</span>
            
          </div>
          <div className={styles.assistito__pratica}>
          <span>{`${assist.data_prima_consultazione}`}</span>
            <span>{`Nr pratica: ${assist.nr_pratica}`}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.main}>
      
      <div className={styles.main__wrapper}>{renderAssistiti()}</div>
      
    </div>
  );
};

export default Sidebar;
