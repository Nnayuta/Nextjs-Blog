import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    min-width: 1360px;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 57px;
`;
export const Title = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    h1 {
        font-family: 'Patrick Hand SC';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 68px;
        color: ${({ theme }) => theme.colors.text};
    }
`

export const ButtonArea = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    gap: 24px;
`;

export const Paragraph = styled.p`
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    max-width: 870px;
`
