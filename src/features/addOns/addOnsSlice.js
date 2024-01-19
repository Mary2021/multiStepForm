import { createSlice } from "@reduxjs/toolkit";

const addOnsSlice = createSlice({
    name: 'addOns',
    initialState: {
        selected: {},
        box1: false,
        box2: false,
        box3: false
    },
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        setBox1: (state, action) => {
            state.box1 = action.payload;
        },
        setBox2: (state, action) => {
            state.box2 = action.payload;
        },
        setBox3: (state, action) => {
            state.box3 = action.payload;
        }
    }
});

export const { 
    setSelected,
    setBox1,
    setBox2,
    setBox3,
} = addOnsSlice.actions;

export default addOnsSlice.reducer;