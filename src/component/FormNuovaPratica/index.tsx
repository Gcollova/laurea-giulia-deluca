import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import fileImg from '../media/file.png';

const NuovaPratica = () => {
    const [gender,setGender] = useState<string>();
    const [rd,setRd] = useState<string>();
    const [al,setAl] = useState<string>();
    const [checkbox,setCheckbox] = useState<string[]>([]);

    const dispatchCheckbox = (value:string) => {
        checkbox.includes(value) ? setCheckbox(checkbox.filter(el => el !== value)) : setCheckbox([...checkbox,value])
    }
    
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
                        <input type="text" id='name' name='name' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="last_name">Cognome</label>
                        <input type="text" id='last_name' name='last_name' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="gender">Sesso</label>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => setGender('M')} id='M' className={`${styles.square} ${gender === "M" && styles.square__selected}`}>M</span>
                        <span onClick={(e:any) => setGender('F')}  id='F' className={`${styles.square} ${gender === "F" && styles.square__selected}`}>F</span>
                        </div>
                    </div>
                    
                    {/* ROW 2 */}

                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="date">Data di nascita</label>
                        <input type="date" id='date' name='date' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="address">Indirizzo</label>
                        <input type="text" id='address' name='address' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="Residenza/domicilio">Residenza/Domicilio</label>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => setRd('R')} id='R' className={`${styles.square} ${rd === "R" && styles.square__selected}`}>R</span>
                        <span onClick={(e:any) => setRd('D')}  id='D' className={`${styles.square} ${rd === "D" && styles.square__selected}`}>D</span>
                        </div>
                    </div>

                    {/* ROW 3 */}

                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="nat">Nazionalita'</label>
                        <input type="text" id='nat' name='nat' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="tel">Telefono</label>
                        <input type="tel" id='tel' name='tel' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' />
                    </div>

                    {/* ROW 4 */}

                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="lang">Lingua</label>
                        <input type="date" id='lang' name='lang' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="lev">Livello lingua italiana</label>
                        <input type="text" id='lev' name='lev' />
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <label htmlFor="abs">Assistenza Linguistica</label>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => setAl('S')} id='S' className={`${styles.square} ${al === "S" && styles.square__selected}`}>SI</span>
                        <span onClick={(e:any) => setAl('N')}  id='N' className={`${styles.square} ${al === "N" && styles.square__selected}`}>NO</span>
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
                        <textarea name="disc" id="disc" draggable='false'></textarea>
                    </div>
                    
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="text2">Problemi di salute o disabilità che influenzano il caso</label>
                        <textarea name="text2" id="text2" draggable='false'></textarea>
                    </div>
                    

                    {/* ROW 3 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="serv">Servizi di assistenza</label>
                        <input type="text" id='serv' name='serv' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="assist">Assistente</label>
                        <input type="text" id='assist' name='assist' />
                    </div>
                    

                    
                </div>
            </div>

            {/* ---------------------/CRITICITÀ E BISOGNI SPECIALI------------------------ */}

            {/*---------------------/SITUAZIONE LEGALE------------------------ */}

            <div className={styles.main__section}>
                <div className={styles.main__section_title}>
                    <h2>SITUAZIONE LEGALE</h2>
                </div>
                <div className={styles.main__section_content}>
                    {/* ROW 1 */}

                    <div className={styles.main__checkbox_wrapper}>
                    <div className={styles.main__input_wrapper}>

                    <label htmlFor="check">Oggetto/i della richiesta</label>
                        </div>
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('A')} id='A' className={`${styles.square} ${checkbox.includes("A") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Protezione internazionale</label>
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('B')} id='B' className={`${styles.square} ${checkbox.includes("B") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Permesso di soggiorno e cittadinanza</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('C')} id='C' className={`${styles.square} ${checkbox.includes("C") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Espulsioni/Respingimenti</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('D')} id='D' className={`${styles.square} ${checkbox.includes("D") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Ricongiungimento familiare</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('E')} id='E' className={`${styles.square} ${checkbox.includes("E") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Minori stranieri non accompagnati</label>
                    </div> 
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('F')} id='F' className={`${styles.square} ${checkbox.includes("F") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Diritti economici e sociali-casa/salute/lavoro</label>
                        <div className={styles.square_wrapper__input_opt}>

                            <label htmlFor="spec3">Specificare</label>
                            <input type="text" id='spec3' name='spec3' />
                        </div>
                        
                    </div>   
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('G')} id='G' className={`${styles.square} ${checkbox.includes("G") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Altra area</label>
                        <div className={styles.square_wrapper__input_opt}>

                            <label htmlFor="indica">Indica</label>
                            <input type="text" id='indica' name='indica' />
                        </div>
                    </div> 
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="desc">Breve descrizione del problema legale</label>
                        <textarea name="desc" id="desc" draggable='false'></textarea>
                    </div>
                    {/* ROW 3 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="probleg">Eventuali procedimenti legali in corso</label>
                        <textarea name="probleg" id="probleg" draggable='false'></textarea>
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
                        <input  type="text" id='status' name='status' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="datarr">Data di arrivo nel Paese</label>
                        <input type="text" id='datarr' name='datarr' />
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="faminfo">Informazioni sulla famiglia (se pertinenti al caso)</label>
                        <textarea name="faminfo" id="faminfo" draggable='false'></textarea>
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
                        <input  type="text" id='Data della prima consultazione' name='Data della prima consultazione' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Numero caso">Numero caso</label>
                        <input type="text" id='Numero caso' name='Numero caso' />
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Tutor CLEDU">Tutor CLEDU</label>
                        <input  type="text" id='Tutor CLEDU' name='Tutor CLEDU' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Studente-Volontario CLEDU">Studente-Volontario CLEDU</label>
                        <input type="text" id='Studente-Volontario CLEDU' name='Studente-Volontario CLEDU' />
                    </div>

                    {/* ROW 3 */}

                    <div className={styles.main__input_wrapper_full}>
                        <label htmlFor="A quale centro/associazione/avvocato è stato indirizzato">A quale centro/associazione/avvocato è stato indirizzato</label>
                        <input  type="text" id='A quale centro/associazione/avvocato è stato indirizzato' name='A quale centro/associazione/avvocato è stato indirizzato' />
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
                        <input  type="date" id='Data' name='Data' />
                    </div>
                    <div className={styles.main__input_wrapper_double}>
                        <label htmlFor="Struttura/servizio del reindirizzamento">Struttura/servizio del reindirizzamento</label>
                        <input type="text" id="Struttura/servizio del reindirizzamento" name="Struttura/servizio del reindirizzamento" />
                    </div>
                    {/* ROW 2 */}

                    <div className={styles.main__textarea_wrapper}>
                        <label htmlFor="Motivo del reindirizzamento">Motivo del reindirizzamento</label>
                        <textarea name="Motivo del reindirizzamento" id="Motivo del reindirizzamento" draggable='false'></textarea>
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

                        <span onClick={(e:any) => dispatchCheckbox('V')} id='V' className={`${styles.square} ${checkbox.includes("V") && styles.square__selected}`}></span>
                        </div>
                        <label className={styles.bold} htmlFor="">Consenso al trattamento dei dati personali secondo le norme vigenti</label>
                    </div>
                    <div className={styles.main__input_wrapper}>
                        <div className={styles.square_wrapper}>

                        <span onClick={(e:any) => dispatchCheckbox('Z')} id='Z' className={`${styles.square} ${checkbox.includes("Z") && styles.square__selected}`}></span>
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
                        <label className={styles.bold} htmlFor="">Carica documenti pertinenti al caso</label>
                    </div>
                    
                    </div>                 

                    
                </div>
            </div>

            {/*---------------------/SCHEDE ALLEGATE------------------------ */}
            
        </div>
    )
}

export default NuovaPratica