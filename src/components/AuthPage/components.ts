import styled from 'styled-components';
import { Avatar, Button, Container, TextField } from '@mui/material';

export const ProfileWrapper = styled(Container)`

  padding-top: 25px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.53);

  &.MuiContainer-root {
    max-width: 1200px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const ProfileAvatarBlock = styled.div`
  width: 80px;
  height: 80px;
`;

export const ProfileAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 100%;
    height: 100%;
    font-size: 40px;
  }
`;

export const ProfileLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 40px;
`;

export const UserName = styled.h2`
  margin-bottom: 10px;
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
`

export const Form = styled('form')`
  background-color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 15px 24px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 500px;
  margin-bottom: 20px;
`;

export const InputTitle = styled.div`
  margin-bottom: 10px;
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