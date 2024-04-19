import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducers";
import { loginReducer } from "./loginReducers";
import { selectedRowsReducer } from "./selectedRowsReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  userLogin: loginReducer,
  selectedRows: selectedRowsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
