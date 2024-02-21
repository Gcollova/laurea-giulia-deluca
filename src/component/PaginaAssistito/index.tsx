import { Assistito } from "../../models/assistito";
import styles from "./styles.module.scss";
import fileImg from '../media/file.png';
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/main";


const Paginaass = () => {
  const {assistito} = useContext(MainContext)
  const [gender,setGender] = useState<string>(assistito.sesso);
    const [rd,setRd] = useState<string>("R");
    const [al,setAl] = useState<string>("N");
    const [checkbox,setCheckbox] = useState<string[]>(assistito.checked);
    const [assRender,setAssRender] = useState(assistito);

    const dispatchCheckbox = (value:string) => {
        checkbox.includes(value) ? setCheckbox(checkbox.filter(el => el !== value)) : setCheckbox([...checkbox,value])
    }
    
    useEffect(() => {
      if(assRender.nome !== assistito.nome){
        console.log('triggered')
        setAssRender({...assistito})
        setGender(assistito.sesso)
        setRd(assistito.residenza_domicilio)
        setCheckbox(assistito.checked)
      }
    }, [assistito])
    

    function reRender(ass:Assistito) {

      return(
        <div className={styles.main}>

            {/*---------------------/DATI PERSONALI------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>DATI PERSONALI</h2>
                </div>
                <div className={styles.main__section_content}>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="name">Nome</label>
                        <input disabled value={assRender.nome} type="text" id='name' name='name' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="last_name">Cognome</label>
                        <input disabled value={assRender.cognome} type="text" id='last_name' name='last_name' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="gender">Sesso</label>
                        <div className={styles.square_wrapper}>

                        <span  id='M' className={`${styles.square} ${gender === "M" && styles.square__selected}`}>M</span>
                        <span   id='F' className={`${styles.square} ${gender === "F" && styles.square__selected}`}>F</span>
                        </div>
                    </div>
                    
                    {/* ROW 2 */}

                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="date">Data di nascita</label>
                        <input disabled value={assRender.data_nascita}  type="text" id='date' name='date' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="address">Indirizzo</label>
                        <input disabled value={assRender.indirizzo} type="text" id='address' name='address' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="Residenza/domicilio">Residenza/Domicilio</label>
                        <div className={styles.square_wrapper}>

                        <span  id='R' className={`${styles.square} ${rd === "R" && styles.square__selected}`}>R</span>
                        <span   id='D' className={`${styles.square} ${rd === "D" && styles.square__selected}`}>D</span>
                        </div>
                    </div>

                    {/* ROW 3 */}

                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="nat">Nazionalita'</label>
                        <input disabled value={assRender.nazionalita} type="text" id='nat' name='nat' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="tel">Telefono</label>
                        <input disabled value={assRender.telefono} type="tel" id='tel' name='tel' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="email">Email</label>
                        <input disabled value={assRender.email} type="email" id='email' name='email' />
                    </div>

                    {/* ROW 4 */}

                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="lang">Lingua</label>
                        <input disabled value={assRender.lingua_madre} type="text" id='lang' name='lang' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="lev">Livello lingua italiana</label>
                        <input disabled value={assRender.livello_lingua} type="text" id='lev' name='lev' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="abs">Assistenza Linguistica</label>
                        <div className={styles.square_wrapper}>

                        <span id='S' className={`${styles.square} ${al === "S" && styles.square__selected}`}>SI</span>
                        <span id='N' className={`${styles.square} ${al === "N" && styles.square__selected}`}>NO</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ---------------------/DATI PERSONALI------------------------ */}

            {/*---------------------/CRITICITÀ E BISOGNI SPECIALII------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>CRITICITÀ E BISOGNI SPECIALI</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="disc">Esperienze di discriminazione o violenza</label>
                        <textarea onChange={() => {}} value={assRender.esperienze_violenza} disabled name="disc" id="disc" draggable='false'></textarea>
                    </div>
                    
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="text2">Problemi di salute o disabilità che influenzano il caso</label>
                        <textarea onChange={() => {}} value={assRender.problemi_salute} disabled name="text2" id="text2" draggable='false'></textarea>
                    </div>
                    

                    {/* ROW 3 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="serv">Servizi di assistenza</label>
                        <input disabled value={assRender.servizi_assistenza} type="text" id='serv' name='serv' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="assist">Assistente</label>
                        <input disabled value={assRender.assistente} type="text" id='assist' name='assist' />
                    </div>
                    

                    
                </div>
            </div>

            {/* ---------------------/CRITICITÀ E BISOGNI SPECIALI------------------------ */}

            {/*---------------------/SITUAZIONE LEGALE------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>SITUAZIONE LEGAGE</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__checkbox_wrapper}>
                    <div className={styles.main__input_wrapper}>

                    <label htmlFor="check">Oggetto/i della richiesta</label>
                        </div>
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='A' className={`${styles.square} ${checkbox.includes("A") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Protezione internazionale</label>
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='B' className={`${styles.square} ${checkbox.includes("B") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Permesso di soggiorno e cittadinanza</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='C' className={`${styles.square} ${checkbox.includes("C") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Espulsioni/Respingimenti</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='D' className={`${styles.square} ${checkbox.includes("D") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Ricongiungimento familiare</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='E' className={`${styles.square} ${checkbox.includes("E") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Minori stranieri non accompagnati</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='F' className={`${styles.square} ${checkbox.includes("F") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Diritti economici e sociali-casa/salute/lavoro</label>
                        <div className={styles.square_wrapper__input_opt}>

                            <label htmlFor="spec3">Specificare</label>
                            <input disabled  value={assRender.specificare} type="text" id='spec3' name='spec3' />
                        </div>
                        
                    </div>   
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='G' className={`${styles.square} ${checkbox.includes("G") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Altra area</label>
                        <div className={styles.square_wrapper__input_opt}>

                            <label htmlFor="indica">Indica</label>
                            <input disabled value={assRender.indica} type="text" id='indica' name='indica' />
                        </div>
                    </div> 
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="desc">Breve descrizione del problema legale</label>
                        <textarea onChange={() => {}} value={assRender.descrizione_problema} disabled name="desc" id="desc" draggable='false'></textarea>
                    </div>
                    {/* ROW 3 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="probleg">Eventuali procedimenti legali in corso</label>
                        <textarea onChange={() => {}} value={assRender.procedimenti_corso} disabled name="probleg" id="probleg" draggable='false'></textarea>
                    </div>
                    

                    
                    

                    
                </div>
            </div>

            {/* ---------------------/SITUAZIONE  LEGALE------------------------ */}

            {/*---------------------/INFORMAZIONI SPECIFICHE PER IMMIGRATI E RIFUGIATI------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>{`INFORMAZIONI SPECIFICHE PER IMMIGRATI E RIFUGIATI (opzionale)`}</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="status">Status di immigrazione</label>
                        <input disabled value={assRender.status_immigrazione}  type="text" id='status' name='status' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="datarr">Data di arrivo nel Paese</label>
                        <input disabled value={assRender.data_arrivo} type="text" id='datarr' name='datarr' />
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="faminfo">Informazioni sulla famiglia (se pertinenti al caso)</label>
                        <textarea onChange={() => {}} value={assRender.info_famiglia} disabled name="faminfo" id="faminfo" draggable='false'></textarea>
                    </div>
                    
                    
                    

                    
                    

                    
                </div>
            </div>

            {/* ---------------------/INFORMAZIONI SPECIFICHE PER IMMIGRATI E RIFUGIATI------------------------ */}


            {/*---------------------/PRESA IN CARICO------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>{`PRESA IN CARICO`}</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Data della prima consultazione">Data della prima consultazione</label>
                        <input disabled value={assRender.data_prima_consultazione}  type="text" id='Data della prima consultazione' name='Data della prima consultazione' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Numero caso">Numero caso</label>
                        <input disabled value={assRender.nr_pratica} type="text" id='Numero caso' name='Numero caso' />
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Tutor CLEDU">Tutor CLEDU</label>
                        <input disabled value={assRender.tutor}  type="text" id='Tutor CLEDU' name='Tutor CLEDU' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Studente-Volontario CLEDU">Studente-Volontario CLEDU</label>
                        <input disabled value={assRender.studente_cledu} type="text" id='Studente-Volontario CLEDU' name='Studente-Volontario CLEDU' />
                    </div>

                    {/* ROW 3 */}

                    <div className={styles.main__input_wrapper_full}>
                        <label htmlFor="A quale centro/associazione/avvocato è stato indirizzato">A quale centro/associazione/avvocato è stato indirizzato</label>
                        <input disabled value={assRender.centro_reindirizzamento}  type="text" id='A quale centro/associazione/avvocato è stato indirizzato' name='A quale centro/associazione/avvocato è stato indirizzato' />
                    </div>
                    
                    
                    
                    

                    
                    

                    
                </div>
            </div>

            {/* ---------------------/PRESA IN CARICO------------------------ */}

            {/*---------------------/REINDIRIZZAMENTO------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>{`REINDIRIZZAMENTO (opzionale)`}</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Data">Data</label>
                        <input disabled value={assRender.data_reindirizzamento}  type="text" id='Data' name='Data' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Struttura/servizio del reindirizzamento">Struttura/servizio del reindirizzamento</label>
                        <input disabled value={assRender.struttura_reindirizzamento} type="text" id="Struttura/servizio del reindirizzamento" name="Struttura/servizio del reindirizzamento" />
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="Motivo del reindirizzamento">Motivo del reindirizzamento</label>
                        <textarea onChange={() => {}} disabled value={assRender.motivo_reindirizzamento} name="Motivo del reindirizzamento" id="Motivo del reindirizzamento" draggable='false'></textarea>
                    </div>                  

                    
                </div>
            </div>

            {/* ---------------------/REINDIRIZZAMENTO------------------------ */}

             {/*---------------------/CONSENSI E DICHIARAZIONI------------------------ */}

             <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>{`CONSENSI E DICHIARAZIONI`}</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__checkbox_wrapper}>
                    
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='V' className={`${styles.square} ${checkbox.includes("V") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Consenso al trattamento dei dati personali secondo le norme vigenti</label>
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span  id='Z' className={`${styles.square} ${checkbox.includes("Z") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Dichiarazione di veridicità delle informazioni fornite</label>
                    </div> 
                    </div>                 

                    
                </div>
            </div>

            {/*---------------------/CONSENSI E DICHIARAZIONI------------------------ */}

             {/*---------------------/SCHEDE ALLEGATE------------------------ */}

             <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>{`CONSENSI E DICHIARAZIONI`}</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__checkbox_wrapper}>
                    
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>
                            <img src={fileImg} alt='file_img' />
                        </div>
                        <label className={styles.bold} htmlFor="">Download documenti pretinenti al caso</label>
                    </div>
                    
                    </div>                 

                    
                </div>
            </div>

            {/*---------------------/SCHEDE ALLEGATE------------------------ */}
            
        </div>
    )
    }

    return reRender(assRender)
    
    
    
};

export default Paginaass;
