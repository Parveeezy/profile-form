import React from 'react';
import { ButtonUI } from './components';

type ButtonComponentType = {
    text: string
    isSubmitting?: boolean
    disabled?: boolean
    type?: string
    id: string
    onClick?: () => void
    children?: any
}

const ButtonComponent = (props: ButtonComponentType) => {
    return (
        <ButtonUI
            type={'submit'}
            disabled={props.isSubmitting}
            variant={props.id === 'button-start' || props.id === 'button-next' ? 'contained' : 'outlined'}
        >
            {props.text}
            {props.children}
        </ButtonUI>
    );
};

export default ButtonComponent;