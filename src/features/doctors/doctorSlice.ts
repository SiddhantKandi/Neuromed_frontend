import { createSlice, createEntityAdapter, createSelector,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Address {
    line1: string;
    line2: string;
}

export interface Doctor{
    _id:string;
    image:string;
    name:string;
    speciality:string;
    degree:string;
    experience:string;
    about:string;
    fees:number;
    address:Address;
}

const doctorAdapter = createEntityAdapter({
    selectId:(doctor:Doctor) => doctor._id,
    sortComparer:(a,b) => a.name.localeCompare(b.name)
});

const initialState = doctorAdapter.getInitialState();

const doctorSlice = createSlice({
    name:"doctors",
    initialState,
    reducers:{
        addDoctors: (state,action : PayloadAction<Doctor[]>) => {
            doctorAdapter.setAll(state,action.payload)
        }
    }
});

export const {
    selectAll:selectAllDoctors,
    selectById:selectDoctorById,
    selectIds:selectDoctorIds
} = doctorAdapter.getSelectors((state: RootState) => state.doctor);


export const selectDoctorsBySpeciality = (speciality: string) => createSelector(
    [selectAllDoctors],
    (allDoctors) => allDoctors.filter((doctor : Doctor) => doctor.speciality === speciality)
)

export const selectDifferentDoctorswithSamespeciality = (speciality:string,_id:string) => createSelector(
    [selectAllDoctors],
    (allDoctors) => allDoctors.filter((doctor:Doctor) => doctor.speciality === speciality && doctor._id != _id)
)



export const {addDoctors} = doctorSlice.actions;

export default doctorSlice.reducer;
