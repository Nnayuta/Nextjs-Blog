import styled from "styled-components";

export const DropDown = styled.select`
    height: 34px;
    background: #FCFCFC;
    border: 1px solid #ECECEC;
    border-radius: 5px;
    margin-right: 9px;

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #262322;
    padding: 0 20px;

    &:hover{
        cursor: pointer;
    }

    option {
        text-align: start;
    }

`;