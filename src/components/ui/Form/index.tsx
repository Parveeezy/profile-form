import React from 'react';
import { FormContainer } from './components';
import AppWrapper from '../AppWrapper';
import Steps from '../Steps';

type FormType = {
    children: React.ReactNode;
}

const FormUi = (props: FormType) => {
    return (
        <AppWrapper>
            <FormContainer>
                <Steps />
                {props.children}
            </FormContainer>
        </AppWrapper>
    );
};

export default FormUi;