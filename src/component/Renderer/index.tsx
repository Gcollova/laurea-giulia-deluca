import { useContext } from "react";
import styles from "./styles.module.scss";
import { MainContext } from "../../context/main";
import PaginaAssistito from "../PaginaAssistito";

const Renderer = () => {
  const { assistito } = useContext(MainContext);
  return (
    <div className={styles.main}>
      {assistito ? <PaginaAssistito assistito={assistito} /> : <div></div>}
    </div>
  );
};

export default Renderer;
