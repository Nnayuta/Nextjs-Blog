import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 60px;
`;

export const GridPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    margin-bottom: 33px;
`