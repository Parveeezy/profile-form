import styled from 'styled-components';
import { Autocomplete, Container, TextField } from '@mui/material';
import ReactInputMask from 'react-input-mask';

export const Wrapper = styled(Container)`
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 30px;
  
  &.MuiContainer-root {
    max-width: 900px;
    padding: 62px 110px;
  }
`;

export const FormContainer = styled(Container)`
  margin-top: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 30px;
  max-width: 680px;
`;

export const Form = styled('form')`
  margin-left: 23px;
  width: 100%;

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }

  @media screen and (max-width: 850px) {
    margin-left: 0;
  }
  
  @media screen and (max-width: 750px) {
    margin-left: 0;
  }
  
`;

export const FormWrapper = styled('div')`
    
`;

export const InputTitle = styled('div')`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Input = styled(ReactInputMask)`
  width: 50%;
  padding: 12px 12px;
  margin-bottom: 10px;
  border: 1px solid #c1c1c1;
  border-radius: 3px;

  &:active {
    outline: none;
    border-color: #b94c4c;
  }

  &:hover {
    border-color: black;
  }
`;

export const InputSelect = styled(Autocomplete)`
  width: 50%;
  margin-bottom: 10px;

  & .MuiInputBase-root {
    height: 42px;
    display: flex;
    align-content: space-around
  }
`;

export const InputTextField = styled(TextField)`
  &.MuiInputBase-root {
    border: none;
    padding: 12px 12px;
    margin-bottom: 10px;
  }
`;

export const InputTip = styled('div')`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.48);
`;

export const ButtonsBlock = styled('div')`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;