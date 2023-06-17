import React from 'react';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import {
    Error,
    Form,
    InputForm,
    InputTel,
    InputTitle,
    InputWrapper,
    LinksBlock,
    ProfileAvatar,
    ProfileAvatarBlock,
    ProfileLinks,
    ProfileWrapper,
    SocialLinks,
    UserName,
    Wrapper,
} from './components';
import ButtonComponent from '../ui/ButtonUi';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../store/slices/StepSlice/StepSlice';
import { AppDispatch } from '../../store/store';

type FormikType = {
    tel: string
    email: string
}

const ValidationForm = () => {

    const dispatch = useDispatch<AppDispatch>();

    const validationSchema = yup.object().shape({
        tel: yup.string()
            .matches(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                { message: 'Неправильный номер', excludeEmptyString: false }),
        email: yup.string().required('Required').email('Invalid email address'),
    });

    const submitHandleClick = (val: any) => {
        dispatch(nextStep())
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
        initialValues: { email: '', tel: '' },
        validationSchema: validationSchema,
        onSubmit: values => submitHandleClick(values),
    });

    return (
        <Wrapper>
            <ProfileWrapper>
                <ProfileAvatarBlock>
                    <ProfileAvatar>ПШ</ProfileAvatar>
                </ProfileAvatarBlock>
                <ProfileLinks>
                    <UserName>Parviz Shirinov</UserName>
                    <LinksBlock>
                        <SocialLinks>
                            <a
                                href='https://t.me/Parveezy'
                                target='_blank'
                                rel='noreferrer'>
                                Telegram
                            </a>
                        </SocialLinks>
                        <SocialLinks>
                            <a
                                href='https://github.com/Parveeezy'
                                target='_blank'
                                rel='noreferrer'
                            >
                                GitHub
                            </a>
                        </SocialLinks>
                        <SocialLinks>
                            <a
                                href='https://hh.ru/resume/42600bd6ff0b2056050039ed1f70393175324a'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Resume
                            </a>
                        </SocialLinks>
                    </LinksBlock>
                </ProfileLinks>
            </ProfileWrapper>
            {(
                <>
                    <Form onSubmit={handleSubmit}>
                        <InputWrapper>
                            <InputTitle>Номер телефона</InputTitle>
                            <InputTel
                                mask='+7 (999) 999-99-99'
                                type='tel'
                                name='tel'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tel}
                                placeholder='+7 999 999-99-99'
                            />
                            <Error style={{ marginBottom: '10px' }}>
                                {errors.tel && touched.tel && errors.tel}
                            </Error>
                        </InputWrapper>

                        <InputWrapper>
                            <InputTitle>Email</InputTitle>
                            <InputForm
                                type='email'
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder='shirinov-2011@bk.ru'
                            />
                            <Error style={{ marginBottom: '10px' }}>
                                {errors.email && touched.email && errors.email}
                            </Error>
                        </InputWrapper>

                        <ButtonComponent
                            type={'submit'}
                            onClick={handleSubmit}
                            isSubmitting={isSubmitting}
                            disabled={isSubmitting}
                            text={'Начать'}
                            id={'button-start'}
                        />

                    </Form>

                </>
            )}
        </Wrapper>
    );
};

export default ValidationForm;