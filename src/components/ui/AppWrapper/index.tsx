import React from 'react';
import { Wrapper } from './components';

type AppWrapperType = {
    children: React.ReactNode;
};

const AppWrapper = (props: AppWrapperType) => {

    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};

export default AppWrapper;