import styled from "styled-components";

export const CreateContainer = styled.form`
    display: flex;
    width: 100%;
    height: 87vh;
`;

export const WrapperTextArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const WrapperTitleDesc = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 98px;
    justify-content: center;

    div{
        display: flex;
        margin-left: 24px;
        align-items: center;

        :first-child{
            margin-bottom: 8px;
        }
    }

    label{
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #EE7674;
    }

    input{
        width: 100%;
        height: 34px;
        max-width: 903px;
        margin-left: 9px;
    }
`;

export const WrapperSideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 273px;
    justify-content: end;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const WrapperIcons = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EE7674;
    padding: 10px;

    div{
        display: flex;
        align-items: center;

        :first-child{
            margin-bottom: 10px;
        }
        
        :last-child{
            margin-left: 10px;
        }
    }

    button{
        color: ${({ theme }) => theme.colors.background};;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        margin-left: 10px;

        :hover{
            color: ${({ theme }) => theme.colors.button};
        }
    }

    select{
        background-color: transparent;
        border: none;

        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #FCFCFC;

        
        :hover{
            color: ${({ theme }) => theme.colors.button};
        }
    }
`;

export const SeparationLine = styled.div`
    width: 2px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.border};
    margin-left: 8px;
    content: "|";
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 200;
    font-size: 30px;
    line-height: 38px;
    color: #FCFCFC;
`;

export const RichText = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;

    padding: 20px;

    :focus{
        outline: none;
    }
`;