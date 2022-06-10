import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border: none;
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
    color: #9274EC;
    user-select: none;

    :hover {
      cursor: pointer;
      color: #F0F0F0;
    }
  
    &#Active{
      color: rgba(146, 116, 236, 0.4);
    }
`