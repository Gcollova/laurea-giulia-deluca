import { useContext } from "react";
import styles from "./styles.module.scss";
import { MainContext } from "../../context/main";
import PaginaAssistito from "../PaginaAssistito";
import NuovaPratica from "../FormNuovaPratica";
import SchedeAllegate from "../SchedeAllegate";
import TeamLegale from "../TeamLegale";

const Renderer = () => {
  const { assistito,page } = useContext(MainContext);
  return (
    <div className={styles.main}>
      
      {page === 'pratiche' ? <PaginaAssistito  /> : page === 'nuova_pratica' ? <NuovaPratica/> : page === "schede_allegate" ? <SchedeAllegate/> :<TeamLegale/>}
    </div>
  );
};

export default Renderer;
