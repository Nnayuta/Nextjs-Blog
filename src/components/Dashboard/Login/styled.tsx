import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const LoginArea = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 31px;

    label{
        color: ${({ theme }) => theme.colors.primary};
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        text-align: center;
    }


    input{

        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;

        background: ${({ theme }) => theme.colors.background};
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 10px;
        width: 490px;
        height: 66px;
        margin-left: 10px;

        padding: 17px;

        &::placeholder{
        }

        &:focus{
            outline: none;
        }
    }

    
    button{

        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 30px;
        border: none;
        width: 343px;
        height: 66px;
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 38px;
        color: #FCFCFC;

        cursor: pointer;

        &:hover{
            box-shadow: 0px 0px 3px ${({ theme }) => theme.colors.primary};
        }
    }
`;
