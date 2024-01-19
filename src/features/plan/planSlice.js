import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        selected: {arcade: 9},
        arcade: true,
        advanced: false,
        pro: false,
        toggle: true,
        colorMo: 'hsl(213, 96%, 18%)',
        colorYr: 'hsl(231, 11%, 63%)'
    },
    reducers: {
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
        setArcade: (state, action) => {
            state.arcade = action.payload;
        },
        setAdvanced: (state, action) => {
            state.advanced = action.payload;
        },
        setPro: (state, action) => {
            state.pro = action.payload;
        },
        setToggle: (state, action) => {
            state.toggle = action.payload;
            console.log(state.toggle)
        },
        setColorMo: (state, action) => {
            state.colorMo = action.payload;
        },
        setColorYr: (state, action) => {
            state.colorYr = action.payload;
        }
    }
});

export const { 
    setSelected,
    setArcade,
    setAdvanced,
    setPro,
    setToggle,
    setColorMo,
    setColorYr
} = planSlice.actions;

export default planSlice.reducer;