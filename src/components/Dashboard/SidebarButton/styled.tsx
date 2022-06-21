import styled from "styled-components";
import { ISideBarProps } from "./index";

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
    background: none;

    ${({ isActive }: ISideBarProps) => isActive && `
        color: #FCFCFC;
        font-weight: 600;
        position: relative;
        background: #EE7674;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    `};

    :hover{
        cursor: pointer;

        ${({ hoverActive }: ISideBarProps) => hoverActive && `
            color: #FCFCFC;
            font-weight: 600;
            position: relative;
            background: #EE7674;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
        `
    };
`