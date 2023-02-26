import { configureStore } from "@reduxjs/toolkit";
import modeReducer from 'state/mode'

export  const store = configureStore({
    reducer: {
      mode: modeReducer,
    },
  });







export type RooState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch