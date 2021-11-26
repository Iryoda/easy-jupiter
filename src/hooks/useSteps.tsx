import { createContext, useContext, useState } from 'react';

type StepProps = {
    step: string;
    setStep(step: string): void;
};

const StepContext = createContext<StepProps>({} as StepProps);

export const StepProvider: React.FC = ({ children }) => {
    const [stepValue, setValueStep] = useState('first');

    const setStep = (step: string) => {
        setValueStep(step);
    };
    return (
        <StepContext.Provider value={{ setStep, step: stepValue }}>
            {children}
        </StepContext.Provider>
    );
};

export const useStep = (): StepProps => {
    const context = useContext(StepContext);
    return context;
};
