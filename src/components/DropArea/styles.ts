import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 48rem;

    background: ${(props) => props.theme.colors.lowPurple};
    border-radius: 2rem;
    color: white;

    padding: 4.8rem;

    cursor: pointer;

    box-shadow: 0px 0px 10px 4px inset rgba(255, 255, 255, 0.1);
    transition: 0.25s ease-in;

    :hover {
        box-shadow: 0px 0px 20px 4px inset rgba(255, 255, 255, 0.3);
    }

    @media (min-width: 768px) {
        width: 100%;
    }
`;
