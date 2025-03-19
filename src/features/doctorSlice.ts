import { createSlice,createEntityAdapter, createSelector } from "@reduxjs/toolkit";

export interface Doctor{
    _id:string;
    image:string;
    name:string;
    speciality:string;
}

export interface RootState {
    doctor : {
     doctors : Doctor[];
    }
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
} = doctorAdapter.getSelectors((state: { doctor: ReturnType<typeof doctorSlice.reducer> }) => state.doctor);

export const selectDoctorsBySpeciality = (speciality: string) => createSelector(
    [selectAllDoctors],
    (allDoctors) => allDoctors.filter((doctor : Doctor) => doctor.speciality === speciality)
)

console.log("Select doctors by speciality is : ",selectDoctorsBySpeciality);

export const {addDoctors} = doctorSlice.actions;

export default doctorSlice.reducer;
