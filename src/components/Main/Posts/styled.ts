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

export const PostContainer = styled.article`
    display: flex;
    flex-direction: column;

    border: 0.5px solid ${({ theme }) => theme.colors.border};;
    padding: 20px;

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    width: 100%;
    height: 100%;
    
    color: ${({ theme }) => theme.colors.text};

    h1{
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content{
        margin: 50px 0;
        text-align: center;
        padding: 20px;

        font-size: 18px;
    }
`;