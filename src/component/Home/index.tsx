import { useContext, useState } from "react";
import Header from "../Header";
import Renderer from "../Renderer";
import Sidebar from "../Sidebar";
import styles from "./styles.module.scss";
import { IPage, MainContext } from "../../context/main";

const Home = () => {
  
  const menuItems:IPage[] = ["pratiche","nuova_pratica","schede_allegate","team_legale"];
  const {setPage,page} = useContext(MainContext)
  return (
    <div className={styles.main}>
      <div className={styles.main__header}>
        <Header />
      </div>
        <div className={styles.main__menu}>
          {menuItems.map((el) => {
            return(
              <div onClick={(e) => {setPage(el)}} id={el} key={el} className={`${styles.main__menu__item} ${page === el && styles.main__menu__item_selected }`}>
                <h3 id={el}>{el.replace("_"," ").toUpperCase()}</h3> 
              </div>
            )
          })}
          
        </div>
      <div className={styles.main__wrapper}>
        <div className={`${styles.main__wrapper__sidebar} ${page !== "pratiche" && styles.main__wrapper__sidebar_hidden}`}>
          <Sidebar />
        </div>
        {page === "pratiche" && <div className={styles.spacer}></div>}
        <div className={styles.main__wrapper__renderer}>
          <Renderer />
        </div>
      </div>
    </div>
  );
};

export default Home;
