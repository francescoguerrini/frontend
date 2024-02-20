import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./counterReducers";
import { loginReducer } from "./loginReducers";

const rootReducer = combineReducers({
  counter: counterReducer,
  userLogin: loginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
