import React from 'react';
import {
    StepsCircle,
    StepsCircleDot,
    StepsCircleWrapper,
    StepsLine,
    StepNumber,
    StepsWrapper,
} from './components';


const Steps = () => {
    return (
        <StepsWrapper>
            <StepsCircleWrapper>
                <StepsCircle>
                    <StepsCircleDot />
                </StepsCircle>
                <StepNumber>1</StepNumber>
            </StepsCircleWrapper>

            <StepsLine />

            <StepsCircleWrapper>
                <StepsCircle>
                    <StepsCircleDot />
                </StepsCircle>
                <StepNumber>2</StepNumber>
            </StepsCircleWrapper>

            <StepsLine />

            <StepsCircleWrapper>
                <StepsCircle>
                    <StepsCircleDot />
                </StepsCircle>
                <StepNumber>3</StepNumber>
            </StepsCircleWrapper>
        </StepsWrapper>
    );
};

export default Steps;