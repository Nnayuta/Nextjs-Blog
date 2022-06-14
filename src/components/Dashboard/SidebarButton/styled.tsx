import styled from "styled-components";

export const liContainer = styled.li`
    list-style: none;
    background: ${({ theme }) => theme.colors.background};


    :nth-child(odd){
         background: ${({ theme }) => theme.colors.backgrund2};
    }
`;

export const SideButton = styled.button`
    color: ${({ theme }) => theme.colors.textMenu};
    border: none;
    width: 100%;
    height: 66px;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    user-select: none;
    background-color: transparent;

    &#active{
        color: ${({ theme }) => theme.colors.textMenuActive} ;
        
        font-weight: 600;
        position: relative;
        background: ${({ theme }) => theme.colors.primary} ;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    }

    :hover{
        cursor: pointer;
    }
`