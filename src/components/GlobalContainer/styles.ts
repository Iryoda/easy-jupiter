import styled from 'styled-components'

export const GlobalContainer = styled.main`
    max-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.background};
`
