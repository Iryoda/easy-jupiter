import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../src/styles'
export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
        </ThemeProvider>
    )
]
