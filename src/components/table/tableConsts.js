export const statusColorMap = {
  Evasa: "success",
  InLavorazione: "warning",
  InScadenza: "danger",
};

export const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "email",
  "name",
  "team",
  "status",
  "data_richiesta",
  "data_scadenza",
  "actions",
];

export const columns = [
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
  { name: "Form.Ev", uid: "formato_evasione" },
];

export const statusOptions = [
  { name: "Evasa", uid: "Evasa" },
  { name: "In Lavorazione", uid: "In Lavorazione" },
  { name: "Vacation", uid: "vacation" },
];
