import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        selected: undefined,
        arcade: true,
        advanced: false,
        pro: false
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
    }
});

export const { 
    setSelected,
    setArcade,
    setAdvanced,
    setPro
} = planSlice.actions;

export default planSlice.reducer;