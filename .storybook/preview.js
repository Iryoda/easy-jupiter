import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'styles'
export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    )
]
