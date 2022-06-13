import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 1150px;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 57px;
`;
export const Title = styled.div`
    display: flex;
    width:  100% ;
    height: 100%;
    max-height: 50px;
    justify-content: center;
    align-items: center;
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

    a {
        margin-left: 24px;
    }
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
