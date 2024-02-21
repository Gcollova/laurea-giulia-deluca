import styles from "./styles.module.scss";
import fake_data from "../../fake_data/assistiti.json";
import { Assistito } from "../../models/assistito";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/main";
import lens from '../media/lente.png';
const Sidebar = () => {
  const assistiti: Assistito[] = fake_data;
  const { setAssistito,assistito, } = useContext(MainContext);
  const [filter,setFilter] = useState('');
  
  function filterAssistiti(filt:string){
    return assistiti.filter(obj => obj.nome?.toLowerCase().includes(filt?.toLowerCase()) || obj.cognome?.toLowerCase().includes(filt?.toLowerCase()) || obj?.nr_pratica?.toLowerCase().includes(filt?.toLowerCase()) || obj?.nazionalita?.toLowerCase().includes(filt?.toLowerCase()) || obj?.data_prima_consultazione?.toLowerCase().includes(filt?.toLowerCase()))
  }
  
  const renderAssistiti = () => {
    return filterAssistiti(filter).map((assist, index) => {
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
            <span>{` ${assist.nr_pratica}`}</span>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <div className={styles.search__wrapper}>
          <img src={lens} alt="lens_" />
          <input placeholder="Nome,Cognome,Data,Nr.Pratica..." value={filter} onChange={(e) =>setFilter(e.target.value)} type="text" />
        </div>


      </div>
      <div className={styles.main__wrapper}>{renderAssistiti()}</div>
      
    </div>
  );
};

export default Sidebar;
