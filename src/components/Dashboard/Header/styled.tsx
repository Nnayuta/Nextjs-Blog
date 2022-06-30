import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    position: relative;
    background: ${({ theme }) => theme.colors.background};
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 126px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0 40px;
    gap: 24px;

    #Notification{
        top: 3px;
    
        ::after{
            color: white;
        }
    }

    &.home{
        font-size: 40px;
    }

`

export const Logo = styled.div`
    width: 79px;
    height: 79px;
    background-color: ${({ theme }) => theme.colors.noImage};
`;

