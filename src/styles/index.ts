import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        src: local('Poppins Regular'), local('Poppings-Regular') url("/fonts/Poppins-Regular.ttf") format('ttf');
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
    body {
        min-height: 100vh ;
        background: ${({ theme }) => theme.colors.background};
        font-family: 'Poppins', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        > div#__next{
            min-height: 100%;
            > main{
                min-height: 100% !important;
            }
        }
    }

    h1 {
        font-size: 2.8rem;
        font-weight: 500;
        color:${({ theme }) => theme.colors.font};
    }
    p {
        font-size: 2rem;
    }
`
