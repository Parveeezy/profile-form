import React from 'react';
import * as yup from 'yup';
import {  FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Formik } from 'formik';

import AppWrapper from '../ui/AppWrapper';
import FormUi from '../ui/Form';
import ButtonComponent from '../ui/ButtonUi';
import {
    AddInput,
    ButtonsBlock,
    CheckboxGroupTitle,
    CheckboxGroupWrapper,
    CheckboxItemNumber,
    CheckboxItemWrapper,
    Form,
    FormWrapper,
    Input,
    InputsBlock,
    InputTip,
    InputTitle,
} from './components';
import CheckboxUI from '../ui/CheckboxUI';
import { Link } from 'react-router-dom';

const SecondStepForm = () => {

    const validationSchema = yup.object().shape({
        nickname: yup.string().required('Required').max(30),
        name: yup.string().required('Required'),
        surname: yup.string().required('Required'),
    });

    return (
        <AppWrapper>
            <FormUi>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        nickname: '',
                    }}
                    onSubmit={values => {
                        console.log('submit', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>

                            <FormWrapper>

                                <InputsBlock>
                                    <InputTitle>Advantages</InputTitle>
                                    <Input
                                        mask={''}
                                        type='nickname'
                                        name='nickname'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nickname}
                                        placeholder={'Placeholder'}
                                    />
                                    <InputTip>{errors.nickname && touched.nickname && errors.nickname}</InputTip>

                                    <AddInput
                                        variant={'outlined'}
                                        type={'submit'}
                                        id={'button-add'}
                                    >+</AddInput>
                                </InputsBlock>

                                <CheckboxGroupWrapper>
                                    <CheckboxGroupTitle>Checkbox group</CheckboxGroupTitle>

                                    <CheckboxItemWrapper>
                                        <CheckboxUI />
                                        <CheckboxItemNumber>1</CheckboxItemNumber>
                                    </CheckboxItemWrapper>

                                    <CheckboxItemWrapper>
                                        <CheckboxUI />
                                        <CheckboxItemNumber>2</CheckboxItemNumber>
                                    </CheckboxItemWrapper>

                                    <CheckboxItemWrapper>
                                        <CheckboxUI />
                                        <CheckboxItemNumber>3</CheckboxItemNumber>
                                    </CheckboxItemWrapper>
                                </CheckboxGroupWrapper>

                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="1"
                                    name="radio-buttons-group"
                                >
                                    <CheckboxGroupTitle>Radio Group</CheckboxGroupTitle>
                                    <FormControlLabel value="1" control={<Radio />} label="1" />
                                    <FormControlLabel value="2" control={<Radio />} label="2" />
                                    <FormControlLabel value="3" control={<Radio />} label="3" />
                                </RadioGroup>

                                <ButtonsBlock>
                                    <Link to={'/first'}>
                                        <ButtonComponent
                                            type='submit'
                                            disabled={isSubmitting}
                                            text={'Назад'}
                                            id={'button-back'}
                                        />
                                    </Link>

                                    <Link to={'/third'}>
                                        <ButtonComponent
                                            type='submit'
                                            disabled={isSubmitting}
                                            text={'Далее'}
                                            id={'button-next'}
                                        />
                                    </Link>
                                </ButtonsBlock>

                            </FormWrapper>

                        </Form>
                    )}
                </Formik>
            </FormUi>

        </AppWrapper>
    );
};

export default SecondStepForm;