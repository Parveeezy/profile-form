import React from 'react';
import { FormikProps, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
    ButtonsBlock,
    Form,
    FormWrapper,
    Input,
    InputSelect,
    // InputTextField,
    InputTip,
    InputTitle,
} from './components';
import * as yup from 'yup';
import ButtonComponent from '../ui/ButtonUi';
import AppWrapper from '../ui/AppWrapper';
import FormUi from '../ui/Form';
import { nextStep, prevStep } from '../../store/slices/StepSlice/StepSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { MenuItem } from '@mui/material';

type FormikType = {
    nickname: string,
    name: string,
    surname: string,
    sex: string
}

enum Sex {
    Man = 'Man',
    Woman = 'Woman',
}


const FirstStepForm = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const options = [Sex.Man, Sex.Woman];

    const validationSchema = yup.object().shape({
        nickname: yup.string().required('Required').max(30),
        name: yup.string().required('Required'),
        surname: yup.string().required('Required'),
        sex: yup.string().required('Required'),
    });

    const submitHandleClick = () => {
        dispatch(nextStep());
        console.log('dddd');
    };

    const prevHandleClick = () => {
        dispatch(prevStep());
        navigate('/');
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
        initialValues: { nickname: '', name: '', surname: '', sex: '' },
        validationSchema: validationSchema,
        onSubmit: submitHandleClick,
    });

    return (
        <AppWrapper>
            <FormUi>
                {(
                    <Form onSubmit={handleSubmit}>
                        <FormWrapper>

                            <InputTitle>Nickname</InputTitle>
                            <Input
                                mask={''}
                                type='nickname'
                                name='nickname'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nickname}
                                placeholder={'Nickname'}
                            />
                            <InputTip>{errors.nickname && touched.nickname && errors.nickname}</InputTip>

                            <InputTitle>Name</InputTitle>
                            <Input
                                mask={''}
                                type='name'
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder={'Name'}
                            />
                            <InputTip>{errors.name && touched.name && errors.name}</InputTip>

                            <InputTitle>Surname</InputTitle>
                            <Input
                                mask={''}
                                type='surname'
                                name='surname'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.surname}
                                placeholder={'Surname'}
                            />
                            <InputTip>{errors.surname && touched.surname && errors.surname}</InputTip>

                            <InputTitle>Sex</InputTitle>

                            <InputSelect
                                value={values.sex}
                                label=''
                                onChange={handleChange}
                                name='sex'
                            >
                                <MenuItem value={options[0]}>Man</MenuItem>
                                <MenuItem value={options[1]}>Woman</MenuItem>
                            </InputSelect>

                            <InputTip>{errors.sex && touched.sex && errors.sex}</InputTip>

                            <ButtonsBlock>
                                <ButtonComponent
                                    onClick={prevHandleClick}
                                    type='submit'
                                    disabled={isSubmitting}
                                    text={'Назад'}
                                    id={'button-back'}
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

export default FirstStepForm;