import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const LoginArea = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    label{
        color: ${({ theme }) => theme.colors.primary};;
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 38px;
        text-align: center;
    }

    input{
        background: #FCFCFC;
        border: 1px solid #ECECEC;
        border-radius: 10px;
        width: 507px;
        height: 66px;
        margin-left: 10px;

        &::placeholder{
        }

        &:focus{
            outline: none;
        }
    }

    button{
        margin: 56px;
        background-color: #EE7674;
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
            box-shadow: 0px 0px 10px #EE7674;
        }
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;