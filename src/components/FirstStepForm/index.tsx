import { Formik } from 'formik';
import React from 'react';
import {
    ButtonsBlock,
    Form,
    FormWrapper,
    Input,
    InputSelect,
    InputTextField,
    InputTip,
    InputTitle,
} from './components';
import * as yup from 'yup';
import ButtonComponent from '../ui/ButtonUi';
import AppWrapper from '../ui/AppWrapper';
import FormUi from '../ui/Form';

const FirstStepForm = () => {
    const enum Sex {
        Man = 'Man',
        Woman = 'Woman',
    }

    const options = [Sex.Man, Sex.Woman];
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const validationSchema = yup.object().shape({
        nickname: yup.string().required('Required').max(30),
        name: yup.string().required('Required'),
        surname: yup.string().required('Required'),
        sex: yup.string().required('Required'),
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
                        sex: '',
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

                                <InputTitle>Sex</InputTitle>
                                <InputSelect
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder={'Sex'}
                                    options={options}
                                    value={values.sex}
                                    renderInput={params => (
                                        <InputTextField
                                            {...params}
                                            type='sex'
                                            name='sex'
                                        />
                                    )}
                                />
                                <InputTip>{errors.sex && touched.sex && errors.sex}</InputTip>

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

export default FirstStepForm;