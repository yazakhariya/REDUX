import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newUserReducer } from "./userReducer";
import { cashReducer } from "./cashReducer";
import { userReducer } from "./userReducer";
import { albumsReducer } from "./albumsReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  user: userReducer,
  userList: newUserReducer,
  albums: albumsReducer,
});

export type AppDispatch = typeof store.dispatch;

export type rootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
