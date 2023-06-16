import React from 'react';
import AppWrapper from '../ui/AppWrapper';
import FormUi from '../ui/Form';
import {
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
import { Link } from 'react-router-dom';

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
                                    <Link to={'/second'}>
                                        <ButtonComponent
                                            type='submit'
                                            disabled={isSubmitting}
                                            text={'Назад'}
                                            id={'button-back'}
                                        />
                                    </Link>

                                    <Link to={'/'}>
                                        <ButtonComponent
                                            type='submit'
                                            disabled={isSubmitting}
                                            text={'Отправить'}
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

export default ThirdStepForm;