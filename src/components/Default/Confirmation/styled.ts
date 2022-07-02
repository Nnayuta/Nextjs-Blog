import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 5;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    user-select: none;
    left: 40%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 400px;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 10px;
`;

export const WrapperTitle = styled.div`
    text-align: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.text};
    cursor: move;
    text-transform: uppercase;
`;

export const WrapperInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.background2};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 10px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
`;

export const ConfirmArea = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;