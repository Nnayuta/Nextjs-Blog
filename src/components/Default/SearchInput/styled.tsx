import styled from "styled-components";

import { ISearchInputProps } from "./index";

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    width: 250px;
    max-height: 34px;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid #ECECEC;
    border-radius: 5px;
    padding: 0 10px;
    transition: opacity 0.5s ease-in-out;
    ${(props: ISearchInputProps) => props.show && 'opacity: 1;' || 'pointer-events: none; opacity: 0;'}

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #262322;

`;
