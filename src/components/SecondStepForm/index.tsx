import React from 'react';
import AppWrapper from '../ui/AppWrapper';
import FormUi from '../ui/Form';
import {
    ButtonsBlock,
    Form,
    FormWrapper,
    Input,
    InputTip,
    InputTitle,
} from '../FirstStepForm/components';
import ButtonComponent from '../ui/ButtonUi';
import { Formik } from 'formik';
import * as yup from 'yup';

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
                        name: '',
                        surname: '',
                    }}
                    onSubmit={values => {
                        console.log('submit', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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


                                <ButtonsBlock>
                                    <ButtonComponent
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
                </Formik>
            </FormUi>
            
        </AppWrapper>
    );
};

export default SecondStepForm;