import { useState } from 'react';
import styles from './styles.module.scss';


const TeamLegale = () => {
    const centri = ['Centro Astalli Palermo', 'CIAI','CGIL','CLAC'];
    const associazioni = ["ASGI - Associazione per gli studi giuridici sull'immigrazione"," Molti volti", "Send Sicilia"];
    const avvocati = ["Barbieri Francesco","Conti Chiara", "Ferrari Laura","Mancini Andrea ","Marini Davide", "Ricciardi Giovanni","Romano Alessandra","Rossetti Sofia"];
    const studenti = ["Marini Davide", "Ricciardi Giovanni","Romano Alessandra","Rossetti Sofia","Barbieri Francesco","Conti Chiara", "Ferrari Laura","Mancini Andrea ",];
    const selectors = ['Centro','Associazione','Avvocati','Studenti'];

    const [selectedSelector,setSelectedSelector] = useState('Centro');

    const toBeRendered = ():string[] => {

         switch (selectedSelector) {
            case "Centro":
                
            return centri
            case "Associazione":
                
            return associazioni

            case "Avvocati":
                
            return avvocati
            case "Studenti":
                
            return studenti
            default:

            return [];
        }
    }
    return(
        <div className={styles.main}>
            <div className={styles.selector}>
                {selectors.map((selector) => {
                    return(
                        <div onClick={() => setSelectedSelector(selector)} key={selector} className={`${styles.element} ${selectedSelector === selector && styles.selected}`}>
                            {selector}
                        </div>
                    )
                })}
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.renderer}>
                {toBeRendered().map(el => {
                    return(
                        <div key={el} className={styles.element}>
                            {el}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TeamLegale