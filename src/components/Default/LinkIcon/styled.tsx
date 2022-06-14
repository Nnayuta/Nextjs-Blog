import styled from "styled-components";

export const Button = styled.a`
  background: transparent;
  border: none;
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.button};
  height: 32px;
  user-select: none;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.background2};
  }

  &#Active{
    color: ${({ theme }) => theme.colors.buttonHover};
  }
`