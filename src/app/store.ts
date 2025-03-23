import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../features/doctors/doctorSlice";

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});
