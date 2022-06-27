import styled from "styled-components";
import Image from 'next/image';
import { PostCard } from './index'

export const PostContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    width: ${({ Destaque }: PostCard) => Destaque ? '828px' : '400px'};
    height: 435px;
    background: ${({ theme }) => theme.colors.noImageMain};
    user-select: none;

    ${({ Destaque }: PostCard) => Destaque && 'grid-column-start: 1; grid-column-end: 3;'}

    :hover{
        cursor: pointer;
    }


`;

export const CardImage = styled(Image)`
    object-fit: cover;
    object-position: left;
`;

export const CardContainer = styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;

    align-items: ${({ Destaque }: PostCard) => Destaque ? 'center' : 'flex-end'};
    justify-content: flex-end;
    

    div{
        display: flex;
        flex-direction: column;
        width: 435px;
        height: ${({ Destaque }: PostCard) => Destaque ? '100%' : '160px'};
        background: rgba(252, 252, 252, 0.7);
        border: 1px solid #EE7674;

        padding: 28px;
    

        font-family: 'Dosis';
        font-style: normal;
        text-align: center;   
        color: #262322;
        font-weight: 400;

        strong{
            font-size: ${({ Destaque }: PostCard) => Destaque ? '24px' : '20px'};
            line-height: ${({ Destaque }: PostCard) => Destaque ? '30px' : '25px'};
            margin-bottom: ${({ Destaque }: PostCard) => Destaque ? '34px' : '11px'};
        }

        p{
            height: ${({ Destaque }: PostCard) => Destaque ? '299px' : '81px'};
            font-size: ${({ Destaque }: PostCard) => Destaque ? '20px' : '15px'};
            line-height: ${({ Destaque }: PostCard) => Destaque ? '20px' : '19px'};
            text-align: justify;
            overflow: hidden;


            
        }
    }
`;
