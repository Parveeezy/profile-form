import styled from 'styled-components';
import { Container } from '@mui/material';

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

`;

export const InputTitle = styled('div')`
  font-weight: 400;
  font-size: 14px;
`;

export const InputTip = styled('div')`
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.48);
`;


export const ButtonsBlock = styled(Container)`
  margin-top: 30px;
  &.MuiContainer-root {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;