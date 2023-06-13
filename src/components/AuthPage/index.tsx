import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
    ButtonUI,
    Error,
    Form,
    InputForm,
    InputTitle,
    InputWrapper, LinksBlock, ProfileAvatar,
    ProfileAvatarBlock, ProfileLinks,
    ProfileWrapper, SocialLinks, UserName,
} from './components';
import { Avatar } from '@mui/material';

const ValidationForm = () => {

    const validationSchema = yup.object().shape({
        email: yup.string().required('Required').email('Invalid email address'),
        tel: yup.string().required('Required'),
    });

    return (
        <div>
            <ProfileWrapper>
                <ProfileAvatarBlock>
                    <ProfileAvatar>ПШ</ProfileAvatar>
                </ProfileAvatarBlock>
                <ProfileLinks>
                    <UserName>Parviz Shirinov</UserName>
                    <LinksBlock>
                        <SocialLinks>
                            <a href='https://t.me/Parveezy'>
                                Telegram
                            </a>
                        </SocialLinks>
                        <SocialLinks>
                            <a href='https://github.com/Parveeezy'>
                                GitHub
                            </a>
                        </SocialLinks>
                        <SocialLinks>
                            <a href='https://hh.ru/resume/42600bd6ff0b2056050039ed1f70393175324a'>
                                Resume
                            </a>
                        </SocialLinks>
                    </LinksBlock>
                </ProfileLinks>
            </ProfileWrapper>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email: '', tel: '' }}
                onSubmit={values => {
                    console.log('submit', values);
                }}
            >
                {
                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>

                            <InputWrapper>
                                <InputTitle>Номер телефона</InputTitle>
                                <InputForm
                                    type='tel'
                                    name='tel'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tel}
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
                                />
                                <Error style={{ marginBottom: '10px' }}>
                                    {errors.email && touched.email && errors.email}
                                </Error>
                            </InputWrapper>

                            <ButtonUI
                                type='submit'
                                disabled={isSubmitting}
                                variant='contained'
                            >
                                Начать
                            </ButtonUI>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

export default ValidationForm;