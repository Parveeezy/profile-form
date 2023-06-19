import React from 'react';
import ValidationForm from './components/AuthPage';
import { Route, Routes } from 'react-router-dom';
import FormComponent from './components/StepsComponent';


function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<ValidationForm />} />
                <Route path='/create' element={<FormComponent />} />
            </Routes>

        </>
    );
}

export default App;