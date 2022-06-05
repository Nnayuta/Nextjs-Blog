import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 1 auto;
    margin-bottom: 60px;
`;

export const GridPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    padding: 20px;
`