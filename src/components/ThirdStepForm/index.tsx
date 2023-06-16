import React from 'react';
import AppWrapper from '../ui/AppWrapper';
import FormUi from '../ui/Form';
import {
    AddInput,
    ButtonsBlock,
    Form,
    FormWrapper,
    InputsBlock,
    InputTip,
    InputTitle, TextArea,
} from './components';
import ButtonComponent from '../ui/ButtonUi';
import { Formik } from 'formik';
import * as yup from 'yup';

const ThirdStepForm = () => {

    const validationSchema = yup.object().shape({
        about: yup.string().required('Required').max(200),
    });

    return (
        <AppWrapper>
            <FormUi>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        about: '',
                    }}
                    onSubmit={values => {
                        console.log('submit', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>

                            <FormWrapper>

                                <InputsBlock>
                                    <InputTitle>About</InputTitle>

                                    <TextArea
                                        name='about'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.about}
                                        placeholder={'Placeholder'}
                                        maxLength={200}
                                    />
                                    <InputTip>{errors.about && touched.about && errors.about}</InputTip>
                                </InputsBlock>

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

export default ThirdStepForm;