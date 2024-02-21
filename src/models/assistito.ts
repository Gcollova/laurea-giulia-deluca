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
}