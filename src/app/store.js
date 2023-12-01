import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from '../features/personalInfo/personalInfoSlice';
import planReducer from '../features/plan/planSlice';

export const store = configureStore({
    reducer: {
        form: personalInfoReducer,
        plan: planReducer
    }
})