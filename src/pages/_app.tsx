import AppProvider from 'hooks'
import { AppProps } from 'next/app'
import { GlobalStyle } from 'styles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </AppProvider>
    )
}

export default MyApp
