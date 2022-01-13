import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles';
import { theme } from '../src/styles/theme.default';
export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    ),
];
