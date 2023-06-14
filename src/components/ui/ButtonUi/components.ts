import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonUI = styled(Button)`  
  &.MuiButton-root {
    padding: 15px 20px;
    
    @media screen and (max-width: 600px) {
      padding: 10px 15px;
    }

    @media screen and (max-width: 400px) {
      padding: 5px 10px;
    }

  }
`;