import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ checked: boolean }>`
    ${({ theme, checked }) => css`
        display: flex;
        align-items: center;
        width: 100%;

        > button {
            background: ${checked ? theme.colors.white : 'none'};

            border: 2px solid ${theme.colors.white};
            outline: none;
            border-radius: 0.4rem;

            width: 2.4rem;
            height: 2.4rem;

            margin-right: 1.6rem;

            cursor: pointer;

            transition: 0.2s;

            :focus {
                box-shadow: 0px 0px 2px 2px ${theme.colors.white};
            }
        }

        > p {
            font-size: 1.4rem;
            color: ${theme.colors.white};
        }
    `}
`;
