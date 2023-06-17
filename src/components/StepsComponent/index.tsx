import React from 'react';
import AppWrapper from '../ui/AppWrapper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FirstStepForm from '../FirstStepForm';
import SecondStepForm from '../SecondStepForm';
import ThirdStepForm from '../ThirdStepForm';

const Index = () => {

    const step = useSelector<RootState>(state => state.steps.step);

    return (
        <AppWrapper>
            {step === 1 && <FirstStepForm />}
            {step === 2 && <SecondStepForm />}
            {step === 3 && <ThirdStepForm />}
        </AppWrapper>
    );
};

export default Index;