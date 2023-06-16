import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
    Error,
    Form,
    InputForm, InputTel,
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
import { Link } from 'react-router-dom';

const ValidationForm = () => {

    const validationSchema = yup.object().shape({
        tel: yup.string()
            .matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            { message: 'Неправильный номер', excludeEmptyString: false }),
        email: yup.string().required('Required').email('Invalid email address'),
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
                            <Link to={'/first'}>
                                <ButtonComponent
                                    type='submit'
                                    isSubmitting={isSubmitting}
                                    disabled={isSubmitting}
                                    text={"Начать"}
                                    id={'button-start'}
                                />
                            </Link>
                        </Form>
                    )
                }
            </Formik>
        </Wrapper>
    );
};

export default ValidationForm;