import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        email: '',
        phone: '',
        validName: '',
        validEmail: '',
        validPhone: ''
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setValidateName: (state, action) => {
            state.validName = action.payload;
        },
        setValidateEmail: (state, action) => {
            state.validEmail = action.payload;
        },
        setValidatePhone: (state, action) => {
            state.validPhone = action.payload;
        },
        resetForm: state => {
            state.name = '';
            state.email = '';
            state.phone = '';
            state.validName = '';
            state.validEmail = '';
            state.validPhone = ''
        },
    }
});

export const { 
    setName,
    setEmail,
    setPhone,
    setValidateName, 
    setValidateEmail, 
    setValidatePhone, 
    resetForm 
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;