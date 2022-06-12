import styled from "styled-components";

export const liContainer = styled.li`
    list-style: none;
    background: #F0F0F0;


    :nth-child(odd){
         background: #FCFCFC;
    }
`;

export const SideButton = styled.button`
    color: rgba(38, 35, 34, 0.3);
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
        color: #FCFCFC;
        font-weight: 600;
        position: relative;
        background: #EE7674;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    }

    :hover{
        cursor: pointer;
    }
`