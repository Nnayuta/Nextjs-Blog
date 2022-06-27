import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    button{
        margin-bottom: 65px;
    }
`;

export const GridPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
    margin-bottom: 33px;
`