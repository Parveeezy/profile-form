import { Formik } from 'formik';
import React from 'react';
import {
    ButtonsBlock,
    Form,
    FormContainer, InputTip, InputTitle,
    Wrapper,
} from './components';
import * as yup from 'yup';
import Steps from '../ui/Steps';
import ButtonComponent from '../ui/ButtonUi';

const FirstStepForm = () => {

    const validationSchema = yup.object().shape({
        nickname: yup.string().required('Required'),
        name: yup.string().required('Required'),
        surname: yup.string().required('Required'),
        sex: yup.string().required('Required'),
    });

    return (
        <Wrapper>
            <FormContainer>

                <Steps />

                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        nickname: '',
                        name: '',
                        surname: '',
                        sex: '',
                    }}
                    onSubmit={values => {
                        console.log('submit', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <InputTitle>Nickname</InputTitle>
                            <input
                                type='email'
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nickname}
                            />
                            <InputTip>Tip</InputTip>
                            {errors.nickname && touched.nickname && errors.nickname}

                            <InputTitle>Name</InputTitle>
                            <input
                                type='password'
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <InputTip>Tip</InputTip>
                            {errors.name && touched.name && errors.name}

                            <InputTitle>Surname</InputTitle>
                            <input
                                type='password'
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.surname}
                            />
                            <InputTip>Tip</InputTip>
                            {errors.surname && touched.surname && errors.surname}

                            <InputTitle>Sex</InputTitle>
                            <input
                                type='password'
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.sex}
                            />
                            <InputTip>Tip</InputTip>
                            {errors.sex && touched.sex && errors.sex}

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

                        </Form>
                    )}
                </Formik>

            </FormContainer>
        </Wrapper>
    );
};

export default FirstStepForm;