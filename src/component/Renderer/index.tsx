import { useContext } from "react";
import styles from "./styles.module.scss";
import { MainContext } from "../../context/main";
import PaginaAssistito from "../PaginaAssistito";
import NuovaPratica from "../FormNuovaPratica";

const Renderer = () => {
  const { assistito,page } = useContext(MainContext);
  return (
    <div className={styles.main}>
      
      {page === 'pratiche' ? <PaginaAssistito  /> : page === 'nuova_pratica' ? <NuovaPratica/> : <div></div>}
    </div>
  );
};

export default Renderer;
