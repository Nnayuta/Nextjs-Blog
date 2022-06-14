import styled from "styled-components";

export const Checkbox = styled.label`   
    display: flex;
    margin-right: -25px;
    margin-left: 5px;

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"] + span {
      display: inline-block;
      position: relative;
      top: -1px;
      width: 17px;
      height: 17px;
      vertical-align: middle;
      background: white left top no-repeat;
      box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.25);

      cursor: pointer;
    }

    input[type="checkbox"]:checked + span {
        background: ${({ theme }) => theme.colors.primary};
    }

    input[type="checkbox"] + span {
      margin-right: 4px;
    }
`;