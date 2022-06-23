import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.button};
    user-select: none;
    animation: ${rotate} 1s linear infinite;
`;