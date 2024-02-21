import styles from './styles.module.scss';
import downloadImg from '../media/download.png'
const SchedeAllegate = () => {
    const schede = ["PROTEZIOE INTERNAZIONALE","PERMESSO DI CITTADINANZA E SOGGIORNO","ESPULSIONI/RESPINGIMENTI",'RICONGIUNGIMENTO FAMILIARE','MINORI STRANIERI NON ACCOMPAGNATI',]
    return(
        <div className={styles.main}>
            <div className={styles.main__wrapper}>
                {schede.map(scheda => {
                    return(
                        <div key={scheda} className={styles.scheda}>
                    <div className={styles.img}>
                        <img src={downloadImg} alt="download_img" />
                    </div>
                    <div className={styles.text}>
                        <p>DOCUMENTI LEGALI {scheda}</p>
                    </div>
                </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default SchedeAllegate