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
        width: 100%;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 1.6rem;
        border-radius: 0.8rem;

        color: ${({ theme }) => theme.colors.font};

        background-color: ${({ theme }) => theme.colors.lowPurple};
        box-shadow: 0px 5px 2px rgba(0, 0, 0, 0.15);

        cursor: pointer;
        transition: 0.2s;

        :hover {
            transform: translateY(-4px);
            box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.15);
        }

        :active {
            transform: translateY(4px);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
        }

        > p {
            margin-right: 2.4rem;
        }
    }
`;
