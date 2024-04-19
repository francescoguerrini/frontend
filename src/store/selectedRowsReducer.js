import { createReducer } from "@reduxjs/toolkit";
import { edit } from "./selectedRowsActions";

const initialState = [];

export const selectedRowsReducer = createReducer(initialState, (builder) => {
  builder.addCase(edit, (state, action) => {
    if (Array.isArray(action.payload)) {
      return [...action.payload];
    }
    return state; // Imposta lo stato uguale al payload ricevuto
  });
});
