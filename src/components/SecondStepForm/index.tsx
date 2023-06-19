import React, { useState } from 'react';
import * as yup from 'yup';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FormikProps, useFormik } from 'formik';

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
import { nextStep, prevStep } from '../../store/slices/StepSlice/StepSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

type FormikType = {
    advantages: ''
    radio: number
    checkbox: number
}

const SecondStepForm = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [checkboxGroupValue, setCheckboxGroupValue] = useState([]);

    const [radioGroupValue, setRadioGroupValue] = useState(null);

    const handleChangeCheckboxGroup = (items: any) => {
        setCheckboxGroupValue(items);
    };

    const handleChangeRadioGroup = (value: any) => {
        setRadioGroupValue(value);
    };

    const validationSchema = yup.object().shape({
        advantages: yup.string().required('Required'),
        radio: yup.number().required('Required'),
        checkbox: yup.number().required('Required'),
    });

    const submitHandleClick = () => {
        dispatch(nextStep());
    };

    const prevHandleClick = () => {
        dispatch(prevStep());
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    }: FormikProps<FormikType> = useFormik({
        initialValues: { advantages: '', radio: 1, checkbox: 1 },
        validationSchema: validationSchema,
        onSubmit: submitHandleClick,
    });


    return (
        <AppWrapper>
            <FormUi>
                {(
                    <Form onSubmit={handleSubmit}>
                        <FormWrapper>
                            <InputsBlock>
                                <InputTitle>Advantages</InputTitle>
                                <Input
                                    mask={''}
                                    type='advantages'
                                    name='advantages'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.advantages}
                                    placeholder={'Placeholder'}
                                />
                                <InputTip>{errors.advantages && touched.advantages && errors.advantages}</InputTip>

                                <AddInput
                                    variant={'outlined'}
                                    type={'submit'}
                                    id={'button-add'}
                                >+</AddInput>
                            </InputsBlock>

                            <CheckboxGroupWrapper>
                                <CheckboxItemWrapper>
                                    <CheckboxUI
                                        items={[
                                            { value: 1, label: '1' },
                                            { value: 2, label: '2' },
                                            { value: 3, label: '3' },
                                        ]}
                                        label='Checkbox group'
                                        onChange={handleChangeCheckboxGroup}
                                        value={checkboxGroupValue}
                                    />
                                </CheckboxItemWrapper>
                            </CheckboxGroupWrapper>


                            <RadioGroup
                                aria-labelledby='demo-radio-buttons-group-label'
                                defaultValue={1}
                                name='radio-buttons-group'
                            >
                                <CheckboxGroupTitle>Radio Group</CheckboxGroupTitle>
                                <FormControlLabel value={1} control={<Radio />} label='1' />
                                <FormControlLabel value={2} control={<Radio />} label='2' />
                                <FormControlLabel value={3} control={<Radio />} label='3' />
                            </RadioGroup>

                            <ButtonsBlock>
                                <ButtonComponent
                                    type='submit'
                                    disabled={isSubmitting}
                                    text={'Назад'}
                                    id={'button-back'}
                                    onClick={prevHandleClick}
                                />

                                <ButtonComponent
                                    type='submit'
                                    disabled={isSubmitting}
                                    text={'Далее'}
                                    id={'button-next'}
                                />
                            </ButtonsBlock>
                        </FormWrapper>
                    </Form>
                )}
            </FormUi>

        </AppWrapper>
    );
};

export default SecondStepForm;