import React from 'react';
import ValidationForm from './components/AuthPage';
import FirstStepForm from './components/FirstStepForm';
import SecondStepForm from './components/SecondStepForm';

function App() {
    return (
        <>
            <ValidationForm />
            <FirstStepForm />
            <SecondStepForm />
        </>
    );
}

export default App;