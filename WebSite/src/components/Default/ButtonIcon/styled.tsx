import styled from "styled-components";

import { IButtonProps } from "./index";

export const Button = styled.button`
    background: transparent;
    position: relative;
    border: none;
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 36px;
    user-select: none;
    
    color: ${(props: IButtonProps) => props.isActive ? '#9274ec66' : '#9274EC'} ;

    ${(props: IButtonProps) => props.hoverActive &&
    `:hover {
      cursor: pointer;
      color: #F0F0F0;}
    `}

  
    &#Active{
      color: rgba(146, 116, 236, 0.4);
    }

    ::after{
      content: '${(props: IButtonProps) => props.insideValue && props.insideValue > 99 ? `${props.insideValue}+` : props.insideValue}';
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);

      font-family: 'Dosis';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      color: #262322;
    }
`