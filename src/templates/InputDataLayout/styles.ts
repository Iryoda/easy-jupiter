import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
        text-align: center;
        margin-bottom: 4.8rem;
    }

    > input {
        border: none;
        outline: none;
        width: 100%;
        padding: 1.6rem;
        border-radius: 0.2rem;
        font-size: 2.4rem;
    }

    > button {
        height: 4.8rem;
        width: 100%;
    }
`;
