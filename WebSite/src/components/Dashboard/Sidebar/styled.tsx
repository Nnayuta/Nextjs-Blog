import styled from "styled-components";

export const SideContainer = styled.aside`
    display: flex;
    width: 373px;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #F0F0F0;
    user-select: none;
`;

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
`;

export const Logout = styled.button`
    margin-bottom: 46px;
    background: transparent;
    border: transparent;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 38px;
    color: #EE7674;

    &:hover {
        cursor: pointer;
    }
`;
