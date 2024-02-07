import { Assistito } from "../../models/assistito";
import styles from "./styles.module.scss";

const PaginaAssistito = (props: { assistito: Assistito }) => {
  const { assistito } = props;
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <span>{`${assistito.nome} ${assistito.cognome}`}</span>
      </div>
      <div className={styles.renderer}>
        <h2>Informazioni Personali</h2>
        <div className={styles.main__wrapper}>
          <div className={styles.third_field}>
            <div className={styles.label}>Nome:</div>
            <div className={styles.value}>{assistito.nome}</div>
          </div>
          <div className={styles.third_field}>
            <div className={styles.label}>Cognome:</div>
            <div className={styles.value}>{assistito.cognome}</div>
          </div>
          <div className={styles.third_field}>
            <div className={styles.label}>Nazionalita':</div>
            <div className={styles.value}>{assistito.nazionalita}</div>
          </div>
          <div className={styles.third_field}>
            <div className={styles.label}>Data di nascita:</div>
            <div className={styles.value}>{assistito.data_nascita}</div>
          </div>
          <div className={styles.third_field}>
            <div className={styles.label}>Email:</div>
            <div className={styles.value}>{assistito.email}</div>
          </div>
          <div className={styles.third_field}>
            <div className={styles.label}>Tel:</div>
            <div className={styles.value}>{assistito.telefono}</div>
          </div>
        </div>

        <h2>Presa in carico e reindirizzamento</h2>
        {/* "data_prima_consultazione": "31-12-2021",
    "avvocato_assegnato": "Luca Bianchi",
    "servizi_assistenza": "interpretariato" */}
        <div className={styles.main__wrapper}>
          <div className={styles.field}>
            <div className={styles.label}>Data prima consultazione:</div>
            <div className={styles.value}>
              {assistito.data_prima_consultazione}
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Avvocato assegnato :</div>
            <div className={styles.value}>{assistito.avvocato_assegnato}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Servizi assistenza:</div>
            <div className={styles.value}>{assistito.servizi_assistenza}</div>
          </div>
        </div>

        <h2>Situazione legale</h2>

        <div className={styles.main__wrapper}>
          <div className={styles.field}>
            <div className={styles.label}>Motivo consulenza:</div>
            <div className={styles.value}>{assistito.motivo_consulenza}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Descrizione problema:</div>
            <div className={styles.value}>{assistito.descrizione_problema}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Procedimenti in corso:</div>
            <div className={styles.value}>{assistito.procedimenti_corso}</div>
          </div>
          <div className={styles.half_field}>
            <div className={styles.label}>Status immigrazione:</div>
            <div className={styles.value}>{assistito.status_immigrazione}</div>
          </div>
          <div className={styles.half_field}>
            <div className={styles.label}>Data di arrivo:</div>
            <div className={styles.value}>{assistito.data_arrivo}</div>
          </div>
          <div className={styles.half_field}>
            <div className={styles.label}>Lingua Madre:</div>
            <div className={styles.value}>{assistito.lingua_madre}</div>
          </div>
          <div className={styles.half_field}>
            <div className={styles.label}>Livello lingua italiana:</div>
            <div className={styles.value}>{assistito.livello_lingua}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Assistenza linguistica:</div>
            <div className={styles.value}>
              {assistito.assistenza_linguistica}
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>info_famiglia:</div>
            <div className={styles.value}>{assistito.info_famiglia}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Discriminazioni:</div>
            <div className={styles.value}>{assistito.discriminazioni}</div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Problemi di salute:</div>
            <div className={styles.value}>{assistito.problemi_salute}</div>
          </div>

          {/* "status_immigrazione": "rifugiato",
    "data_arrivo": "05-01-2020",
    "lingua_madre": "arabo",
    "livello_lingua": "B1",
    "info_famiglia": "testo di esempio",

    "discriminazioni": "no",
    "problemi_salute": "no",
    "assistenza_linguistica": "no", */}
        </div>

        <h2>Trattamento dati</h2>
        <div className={styles.main__wrapper}>
          <div className={styles.field}>
            <div className={styles.label}>Consenso trattamento dati:</div>
            <div className={styles.value}>
              {assistito.consenso_trattamento_dati ? "SI" : "NO"}
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.label}>Dichiarazione di veridicita' :</div>
            <div className={styles.value}>
              {assistito.dichiarazione_veridicita}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaAssistito;
