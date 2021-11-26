import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme.default';
import { FileProvider } from './useFile';
import { StepProvider } from './useSteps';

const AppProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <StepProvider>
            <FileProvider>{children}</FileProvider>
        </StepProvider>
    </ThemeProvider>
);

export default AppProvider;
