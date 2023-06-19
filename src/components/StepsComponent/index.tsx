import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FirstStepForm from '../FirstStepForm';
import SecondStepForm from '../SecondStepForm';
import ThirdStepForm from '../ThirdStepForm';


const FormComponent = () => {

    const step = useSelector<RootState>(state => state.steps.step);

    return (
        <>
            {step === 1 && <FirstStepForm />}
            {step === 2 && <SecondStepForm />}
            {step === 3 && <ThirdStepForm />}
        </>
    );
};

export default FormComponent;