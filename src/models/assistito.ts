export interface Assistito {
  nr_pratica: string;
  nome: string;
  cognome: string;
  sesso:string,
  data_nascita: string;
  nazionalita: string;
  indirizzo: string;
  email: string;
  telefono: string;
  esperienze_violenza:string;
  assistente:string;
  centro_reindirizzamento:string;
  motivo_consulenza: string;
  descrizione_problema: string;
  procedimenti_corso: string;

  status_immigrazione: string;
  data_arrivo: string;
  lingua_madre: string;
  livello_lingua: string;
  info_famiglia: string;

  discriminazioni: string;
  problemi_salute: string;
  assistenza_linguistica: string;

  consenso_trattamento_dati: boolean;
  dichiarazione_veridicita: string;

  data_prima_consultazione: string;
  avvocato_assegnato: string;
  servizi_assistenza: string;
  tutor:string,
  studente_cledu:string,
  struttura_reindirizzamento:string,
  data_reindirizzamento:string,
  motivo_reindirizzamento:string,
  specificare:string,
  indica:string,
  checked:string[],
  residenza_domicilio:string
}