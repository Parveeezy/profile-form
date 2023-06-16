import React from 'react';
import ValidationForm from './components/AuthPage';
import FirstStepForm from './components/FirstStepForm';
import SecondStepForm from './components/SecondStepForm';
import ThirdStepForm from './components/ThirdStepForm';

function App() {
    return (
        <>
            <ValidationForm />
            <FirstStepForm />
            <SecondStepForm />
            <ThirdStepForm />
        </>
    );
}

export default App;