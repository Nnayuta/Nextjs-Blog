import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;;
    background-color: ${({ theme }) => theme.colors.backgroundGeral};
`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1000px;
    justify-content: center;
    align-items: center;
`;
