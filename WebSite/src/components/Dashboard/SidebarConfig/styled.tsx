import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
        color: #EE7674;
    }

    input {
        height: 25px;
        color: #262322;
        background-color: transparent;
        border: 1px solid #EE7674;
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

    
    label {
        color: #EE7674;
        margin-bottom: 28px;
    }

    img{
        background: #F0F0F0;
        border: 1px solid #F0F0F0;
        margin-right: 24px;
    }

`

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
        color: #EE7674;
        margin-bottom: 18px;
    }

    #biografia {
        width: 531px;
        height: 78px;
        color: #262322;

        :disabled{
            border: none;
            background: #F0F0F0;
        }
    }

    #descricao{
        width: 423px;
        height: 52px;
        color: #262322;

        :disabled{
            border: none;
            background: #F0F0F0;
        }
    }
        
`;