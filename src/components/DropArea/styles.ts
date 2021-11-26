import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80rem;
    height: 48rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    cursor: pointer;
    background: ${(props) => props.theme.colors.lowPurple};
    color: white;
    box-shadow: 0px 0px 10px 4px inset rgba(255, 255, 255, 0.1);
    transition: 0.25s ease-in;

    :hover {
        box-shadow: 0px 0px 20px 4px inset rgba(255, 255, 255, 0.3);
    }
`;
