import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppointmentState = {
    appointmentItems: AppointmentItem
}

const initialState:AppointmentState = {appointmentItems:[],}

export const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        addAppointment: (state, action:PayloadAction<AppointmentItem>)=>{
            const { _id } = action.payload;
            const existingAppointmentIndex = state.appointmentItems.findIndex(item => item.id === _id);
            if (existingAppointmentIndex !== -1) {
                // If the booking with the same ID exists, replace it
                state.appointmentItems[existingAppointmentIndex] = action.payload;
            } else {
                // If the booking with the same ID does not exist, add it
                state.appointmentItems.push(action.payload);
            }
        },
        removeAppointment(state, action: PayloadAction<string>) {
            const idToRemove = action.payload;
            state.appointmentItems = state.appointmentItems.filter(item => item.id !== idToRemove);
        },
    }
})

export const {addAppointment, removeAppointment} = appointmentSlice.actions;
export default appointmentSlice.reducer;