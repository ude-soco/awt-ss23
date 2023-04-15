import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

const reducer = combineReducers({
  counterReducer
});

const storeConfig = configureStore({ reducer });

export default storeConfig;
