import { createSlice } from '@reduxjs/toolkit';

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
            state.step++;
        },
        prevStep: (state) => {
            state.step--;
        },
    },
});

export const { nextStep, prevStep } = StepSlice.actions;
export default StepSlice.reducer;