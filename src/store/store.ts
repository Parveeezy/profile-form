import { configureStore } from '@reduxjs/toolkit';
import {  StepSlice } from './slices/StepSlice/StepSlice';

export const store = configureStore({
    reducer: {
        steps: StepSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch