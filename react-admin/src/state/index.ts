import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "state/mode";
import { api } from "./api";
import userIdReducer from "./userId";

export const store = configureStore({
  reducer: {
    userId:userIdReducer,
    mode: modeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

export type RooState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
