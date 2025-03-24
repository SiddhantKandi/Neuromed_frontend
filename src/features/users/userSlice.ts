import { createSlice } from "@reduxjs/toolkit";

interface User {
    name: string;
    email: string;
    contact: string;
    address: string;
    gender: string;
    birthDate: string;
}

const initialState : User[]  = [{
    name:"siddhant",
    email:"kandisiddhant@gmail.com",
    contact:"1234567890",
    address:"xyzabc",
    gender:"male",
    birthDate:"22/05/2003"
}];
   
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers : {}
});

export default userSlice.reducer;