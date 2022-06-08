import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &h2{
        font-size: 1.5rem;
    }

    &#Destaque{
        grid-column-start: 1;
        grid-column-end: 3;
    }

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 890px){
        &#Destaque{
            grid-column-start: 1;
            grid-column-end: 4;
        }
    }
`;

export const PostImage = styled.img`
    width: 100%;
    height: 100%;
`;
