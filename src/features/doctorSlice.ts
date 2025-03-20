import { createSlice, createEntityAdapter, createSelector, EntityState } from "@reduxjs/toolkit";

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

export interface RootState {
    doctor: EntityState<Doctor, string>;
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
        addDoctors: (state,action) => {
            doctorAdapter.setAll(state,action.payload)
        }
    }
});

export const {
    selectAll:selectAllDoctors,
    selectById:selectDoctorById,
    selectIds:selectDoctorIds
} = doctorAdapter.getSelectors((state: { doctor: ReturnType<typeof doctorSlice.reducer> }) => state.doctor);


export const selectDoctorsBySpeciality = (speciality: string) => createSelector(
    [selectAllDoctors],
    (allDoctors) => allDoctors.filter((doctor : Doctor) => doctor.speciality === speciality)
)



export const {addDoctors} = doctorSlice.actions;

export default doctorSlice.reducer;
