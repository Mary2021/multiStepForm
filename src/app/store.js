import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from '../features/personalInfo/personalInfoSlice';
import planReducer from '../features/plan/planSlice';
import addOnsReducer from '../features/addOns/addOnsSlice';

export const store = configureStore({
    reducer: {
        form: personalInfoReducer,
        plan: planReducer,
        addOns: addOnsReducer,
    }
})