import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../features/doctors/doctorSlice";
import userReducer from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user:userReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
