import {configureStore} from '@reduxjs/toolkit';
import doctorReducer from '../features/doctorSlice'

export const store = configureStore({
    reducer:{
        doctor : doctorReducer,
    }
});