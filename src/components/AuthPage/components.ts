import styled from 'styled-components';
import { Avatar, Button, Container, TextField } from '@mui/material';
import ReactInputMask from 'react-input-mask';

export const Wrapper = styled(Container)`
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #ffffff;

  &.MuiContainer-root {
    max-width: 900px;
  }
`;

export const ProfileWrapper = styled(Container)`
  padding-top: 25px;
  padding-bottom: 20px;
  margin-bottom: 25px;
  border-bottom: 3px solid rgba(128, 128, 128, 0.73);

  &.MuiContainer-root {
    padding-left: 0;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const ProfileAvatarBlock = styled.div`
  width: 80px;
  height: 80px;
  
  @media screen and (max-width: 700px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 450px) {
    width: 40px;
    height: 40px;
  }
`;

export const ProfileAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 100%;
    height: 100%;
    font-size: 40px;

    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
`;

export const ProfileLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 40px;
  @media screen and (max-width: 900px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const UserName = styled.h2`
  margin-bottom: 10px;
  
  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`

export const LinksBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SocialLinks = styled.div`
    margin-right: 10px;
  & a {
    text-decoration: none;
    color: blue;
  }
  & a:hover {
    color: orange;
  }
  
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

export const Form = styled('form')`
  background-color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 15px 0;
  max-width: 310px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
  }
`;

export const InputTitle = styled.div`
  margin-bottom: 10px;
`;


export const InputTel = styled(ReactInputMask)`
  width: 100%;
  height: 57px;
  border-radius: 3px;
  border: 1px solid #c1c1c1;
  padding-left: 10px;
  margin-bottom: 10px;

  &:hover {
    border-color: #090909;
  }

  &:focus {
    outline: 2px solid #1976d2;
    border-color: transparent;
  }
`;

export const InputForm = styled(TextField)`
  width: 100%;

  &.MuiFormControl-root {
    margin-bottom: 10px;
  }

  & label.Mui-focused {
    color: #787878;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 14px;
`;

export const ButtonUI = styled(Button)`  
  &.MuiButton-root {
    padding: 15px 20px;
  }
`;