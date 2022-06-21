import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;

    h2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-family: 'Dosis';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 38px;
        color: #FCFCFC;
        text-shadow: 0px 0px 10px #000000;
    }

    &#Destaque{
        grid-column-start: 1;
        grid-column-end: 3;
    }

    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.336);
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
    min-width: 380px;
    min-height: 435px;
    background-color: ${({ theme }) => theme.colors.noImageMain};
`;
