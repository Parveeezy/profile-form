import styled from 'styled-components';
import ReactInputMask from 'react-input-mask';
import { Button } from '@mui/material';


export const Form = styled('form')`
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

export const FormWrapper = styled('div')``;

export const InputsBlock = styled('div')``;

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
  border-radius: 4px;
  outline: none;

  &:hover {
    border: 1px solid #000000;
  }

  &:focus {
    border: 2px solid #5558FA;
    padding: 11px;
  }
`;

export const AddInput = styled(Button)`
  &.MuiButton-root {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const CheckboxGroupWrapper = styled('div')`
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const CheckboxGroupTitle = styled('div')`
  font-weight: 400;
  font-size: 14px;
  color: #333333;
  margin-bottom: 2px;
`;

export const CheckboxItemWrapper = styled('div')`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CheckboxItemNumber = styled('div')`
    
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