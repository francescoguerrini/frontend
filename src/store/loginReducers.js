import { createReducer } from "@reduxjs/toolkit";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../consts/loginConsts";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const loginReducer = createReducer(
  { loading: false, userInfo: userInfoFromStorage, error: null },
  (builder) =>
    builder
      .addCase(USER_LOGIN_REQUEST, (state) => {
        return { ...state, loading: true };
      })
      .addCase(USER_LOGIN_SUCCESS, (state, action) => {
        return { ...state, loading: false, userInfo: action.payload };
      })
      .addCase(USER_LOGIN_FAIL, (state, action) => {
        return { ...state, loading: false, error: action.payload };
      })
      .addCase(USER_LOGOUT, () => {
        return { loading: false, userInfo: null, error: null };
      })
);
