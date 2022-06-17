import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 22px;

    p{
        font-family: 'Dosis';
        font-weight: 400;
        font-style: normal;
        font-size: 15px;
        line-height: 19px;
    }
`;

export const FileUpload = styled.div`
    display: flex;
    align-items: center;

    label{
        border: none;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 5px;

        padding: 5px 12px;

        font-family: 'Dosis';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: ${({ theme }) => theme.colors.textMenuActive};

        &:hover{
            background: ${({ theme }) => theme.colors.hover};
            cursor: pointer;
        }
    }

    input{
        margin-left: 10px;
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 25px;
        color: ${({ theme }) => theme.colors.text};
        ::-webkit-file-upload-button{
            display: none;
        }
    }

`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 19px;
`;

export const WrapperGridType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;
    width: 68px;
    height: 34px;;
    margin-right: 9px;

    button{
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #262322;
        margin: 8px 5px;

        &#Active{
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const WrapperFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    button{
        font-size: 20px;
    }
`;


export const GridContainer = styled.div`    
    display: flex;
    flex-direction: column;
`;

export const GridImage = styled.div`
    display: flex;
    margin-top: 18px;
    flex-wrap: wrap;
    overflow:scroll;
    overflow-x:hidden;
    height: 680px;
    width: 100%;
    

    div{
        margin-right: 22px;
        margin-bottom: 18px;

        display: flex;
        width: 214px;
        height: 214px;
        background: ${({ theme }) => theme.colors.noImage};

        :hover{
            border: 5px solid ${({ theme }) => theme.colors.primary};
            cursor: pointer;
        }
    }
`;
