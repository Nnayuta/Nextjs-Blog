import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 22px;
`;

export const ContainerPostCount = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 23px;

    button{
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: rgba(38, 35, 34, 0.3);

        border: none;
        background: none;

        :hover{
            cursor: pointer;;
        }

        &#active{
            color: #EE7674;
        }
    }

    button::after{
        content: "|";
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin: 0 9px;
        color: rgba(38, 35, 34, 0.3);
    }

    button:last-child::after{
        content: "";
    }
`;

export const ContainerFilterSearch = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`;

export const FilterSearch = styled.div`
    display: flex;

    input{
        margin-right: 8px;
    }

    button{
        font-size: 20px;
    }
`;

export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #262322;

`;
export const theadTr = styled.tr`
    background: #FCFCFC;
    border: 1px solid #ECECEC;
    height: 34px;
    user-select: none;

    th{
        text-align: start;
        padding-left: 11px;

        &#icon{
            padding-left: 15px;
            font-family: 'Material Icons';
            font-style: normal;
            font-weight: 400;
            font-size: 20px
        }
    }

`;
export const tbodyTr = styled.tr`
    background: #FCFCFC;
    height: 52px;

    td{
        padding: 0 11px;

        button, a {
            font-size: 30px;
        } 
    }

    :nth-child(odd){
        background: #F0F0F0;
    }
`;