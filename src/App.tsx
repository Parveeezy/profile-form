import React from 'react';
import ValidationForm from './components/AuthPage';
import FirstStepForm from './components/FirstStepForm';
import SecondStepForm from './components/SecondStepForm';
import ThirdStepForm from './components/ThirdStepForm';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ValidationForm />} />
                <Route path='/first' element={<FirstStepForm />} />
                <Route path='/second' element={<SecondStepForm />} />
                <Route path='/third' element={<ThirdStepForm />} />
            </Routes>
        </>
    );
}

export default App;