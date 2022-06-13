import styled from "styled-components";

import { ISearchInputProps } from "./index";

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    width: 250px;
    max-height: 34px;
    background: #FCFCFC;
    border: 1px solid #ECECEC;
    border-radius: 5px;
    padding: 0 10px;
    transition: opacity 0.5s ease-in-out;

    ${(props: ISearchInputProps) => props.display ?
        `
        opacity: 1;
        `
        :
        `
        pointer-events: none;
        opacity: 0;
        `}
`;
