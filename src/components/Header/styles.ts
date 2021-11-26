import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
    width: 100%;
    height: 9.6rem;
    /* background: ${(props) => props.theme.colors.purple}; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 4.2rem;
    h1 {
        font-size: 2.4rem;
        color: #fff;
        font-weight: 400;
    }

    ${media.greaterThan('medium')`
        padding: 0rem 24rem;
    `}
`;
