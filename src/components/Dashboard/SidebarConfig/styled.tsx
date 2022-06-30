import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
    margin: 28px 66px;
`;

export const WrapperGeneralData = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 65px;
    width: 100%;
`;

export const GeneralDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const WrapperDataInputs = styled.div`
    display: flex;
    align-items: center;
    margin: 38px 0;
    width: 100%;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    label {
        color: ${({ theme }) => theme.colors.primary};
    }

    input {
        height: 25px;
        color: #262322;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 5px;
        padding: 0 10px;

        :disabled{
            border: none;
            padding-top: 6px;
        }
    }

    button {
        font-size: 20px;
    }
`;

export const WrapperAvatar = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    width: 100%;

    
    label {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 28px;
    }

    div{
        display: flex;
        height: 100%;
        align-items: baseline;
        gap: 24px;
    }

`

export const Avatar = styled.div`
    border: 1px dashed ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h2`
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    color: #262322;
`;

export const WrapperTextArea = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    label {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 18px;
    }

    textarea{
        padding: 10px;
    }

    #biografia {
        width: 531px;
        height: 78px;
        color: ${({ theme }) => theme.colors.text};

        :disabled{
            border: none;
            background: ${({ theme }) => theme.colors.background2};
        }
    }

    #descricao{
        width: 423px;
        height: 52px;
        color: ${({ theme }) => theme.colors.text};

        :disabled{
            border: none;
            background: ${({ theme }) => theme.colors.background2};
        }
    }
        
`;

export const testeDiv = styled.div`

display: flex;
position: fixed;

width: 100px;
height: 100px;

background-color: red;

`