import { createSlice } from "@reduxjs/toolkit";
import {doctors} from "../assets/assets_frontend/assets";


const initialState = {
    doctors : doctors
}

const doctorSlice = createSlice({
    name:"doctors",
    initialState,
    reducers:{

    }
});

export default doctorSlice.reducer;
