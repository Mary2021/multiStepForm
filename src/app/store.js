import { configureStore } from '@reduxjs/toolkit';
import personalInfoReducer from '../features/personalInfo/personalInfoSlice';

export const store = configureStore({
    reducer: {
        form: personalInfoReducer
    }
})