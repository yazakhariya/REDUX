import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cashReducer } from "./cashReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  user: userReducer,
});

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({ reducer: rootReducer });
