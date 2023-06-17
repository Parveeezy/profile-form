import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface StepSliceType {
    step: number;
}


const initialState: StepSliceType = {
    step: 0,
};

export const StepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1;
        },
        prevStep: (state) => {
            state.step -= 1;
        },
    },
});

export const { nextStep, prevStep } = StepSlice.actions;
export default StepSlice.reducer;