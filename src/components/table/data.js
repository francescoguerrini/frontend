import gugupa from "../../assets/gugupa.jpg";
import susanna from "../../assets/susanna.jpg";
import chiara from "../../assets/chiara.jpg";
import giulia from "../../assets/giulia_eredia.jpg";
import deborah from "../../assets/deborah.jpg";

const statusColorMap = {
  Evasa: "success",
  InLavorazione: "warning",
  InScadenza: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "email",
  "name",
  "status",
  "data_richiesta",
  "data_scadenza",
  "actions",
];

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "Prodotto", uid: "email" },

  { name: "Posizioni", uid: "age", sortable: true },
  { name: "Cliente", uid: "role", sortable: true },
  { name: "Operatore", uid: "name", sortable: true },
  { name: "Responsabile", uid: "team" },

  { name: "Stato", uid: "status", sortable: true },

  { name: "Richiesta", uid: "data_richiesta", sortable: true },
  { name: "Scadenza", uid: "data_scadenza" },

  { name: "Azioni", uid: "actions" },
  { name: "Ev.Format", uid: "formato_evasione" },
];

const statusOptions = [
  { name: "Evasa", uid: "Evasa" },
  { name: "InLavorazione", uid: "InLavorazione" },
  { name: "InScadenza", uid: "InScadenza" },
];

const users = [
  {
    id: 61,
    name: "Augusto P",
    role: "Axactor",
    team: "Deborah R",
    status: "Evasa",
    age: "29",
    avatar: gugupa,
    email: "BD ADDRESS",
    data_richiesta: "12/03/24",
    data_scadenza: "24/03/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 72,
    name: "Susanna D",
    role: "Ccollection",
    team: "Chiara C",
    status: "InLavorazione",
    age: "25",
    avatar: susanna,
    email: "BD LIGHT PLUS 2.0",
    data_richiesta: "16/02/24",
    data_scadenza: "29/02/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 83,
    name: "Chiara C",
    role: "Axactor",
    team: "Chiara C",
    status: "InScadenza",
    age: "22",
    avatar: chiara,
    email: "BD ADDRESS LIGHT PLUS 2.0",
    data_richiesta: "16/01/24",
    data_scadenza: "29/01/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 94,
    name: "Giulia E",
    role: "Ares",
    team: "Deborah R",
    status: "InLavorazione",
    age: "28",
    avatar: giulia,
    email: "BD ADDRESS LIGHT PLUS 2.0",
    data_richiesta: "22/03/24",
    data_scadenza: "01/04/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 105,
    name: "Deborah R",
    role: "Axactor",
    team: "Deborah R",
    status: "Evasa",
    age: "24",
    avatar: deborah,
    email: "DETECT PLUS",
    data_richiesta: "29/02/24",
    data_scadenza: "02/02/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 111,
    name: "Augusto P",
    role: "Axactor",
    team: "Deborah R",
    status: "Evasa",
    age: "29",
    avatar: gugupa,
    email: "BD ADDRESS",
    data_richiesta: "12/03/24",
    data_scadenza: "24/03/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 12,
    name: "Susanna D",
    role: "Ccollection",
    team: "Chiara C",
    status: "InLavorazione",
    age: "25",
    avatar: susanna,
    email: "BD LIGHT PLUS 2.0",
    data_richiesta: "16/02/24",
    data_scadenza: "29/02/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 31,
    name: "Chiara C",
    role: "Axactor",
    team: "Chiara C",
    status: "InScadenza",
    age: "22",
    avatar: chiara,
    email: "BD ADDRESS LIGHT PLUS 2.0",
    data_richiesta: "16/01/24",
    data_scadenza: "29/01/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 41,
    name: "Giulia E",
    role: "Ares",
    team: "Deborah R",
    status: "InLavorazione",
    age: "28",
    avatar: giulia,
    email: "BD ADDRESS LIGHT PLUS 2.0",
    data_richiesta: "22/03/24",
    data_scadenza: "01/04/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 15,
    name: "Deborah R",
    role: "Axactor",
    team: "Deborah R",
    status: "Evasa",
    age: "24",
    avatar: deborah,
    email: "DETECT PLUS",
    data_richiesta: "29/02/24",
    data_scadenza: "02/02/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 13,
    name: "Augusto P",
    role: "Axactor",
    team: "Deborah R",
    status: "Evasa",
    age: "29",
    avatar: gugupa,
    email: "BD ADDRESS",
    data_richiesta: "12/03/24",
    data_scadenza: "24/03/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 23,
    name: "Susanna D",
    role: "Ccollection",
    team: "Chiara C",
    status: "InLavorazione",
    age: "25",
    avatar: susanna,
    email: "BD LIGHT PLUS 2.0",
    data_richiesta: "16/02/24",
    data_scadenza: "29/02/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 33,
    name: "Chiara C",
    role: "Axactor",
    team: "Chiara C",
    status: "InScadenza",
    age: "22",
    avatar: chiara,
    email: "BD ADDRESS LIGHT PLUS 2.0",
    data_richiesta: "16/01/24",
    data_scadenza: "29/01/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 43,
    name: "Giulia E",
    role: "Ares",
    team: "Deborah R",
    status: "InLavorazione",
    age: "28",
    avatar: giulia,
    email: "BD ADDRESS LIGHT PLUS 2.0",
    data_richiesta: "22/03/24",
    data_scadenza: "01/04/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
  {
    id: 53,
    name: "Deborah R",
    role: "Axactor",
    team: "Deborah R",
    status: "Evasa",
    age: "24",
    avatar: deborah,
    email: "DETECT PLUS",
    data_richiesta: "29/02/24",
    data_scadenza: "02/02/24",
    data_evasione: "",
    formato_evasione: "xls",
  },
];

export {
  users,
  columns,
  statusOptions,
  statusColorMap,
  INITIAL_VISIBLE_COLUMNS,
};
