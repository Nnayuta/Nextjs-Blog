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

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    img{
        width: 100%;
        height: auto;
        border: 5px solid ${({ theme }) => theme.colors.primary};
    }
    
    color: ${({ theme }) => theme.colors.text};

    h1{
        text-align: center;
        margin-bottom: 15px;
    }

    p{
        margin-bottom: 15px;
        margin-top: 20px;
        text-align: justify;
    }
`;