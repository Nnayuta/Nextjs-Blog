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
`;

export const ContainerPostCountButton = styled.button`
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.textDisabled};
    border: none;
    background: none;

    :hover{
            cursor: pointer;;
    }

    &#active{
            color: ${({ theme }) => theme.colors.primary};
    }

    ::after{
        content: "|";
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        margin: 0 9px;
        color: rgba(38, 35, 34, 0.3);
    }

    :last-child::after{
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

export const ContainerTable = styled.div`
    display: flex;
    width: 100%;

            overflow:scroll;
            overflow-x:hidden;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    font-family: 'Dosis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.text};
`;

export const TableHeadTr = styled.tr`
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};
    height: 34px;
    user-select: none;

    #icon{
        padding-left: 15px;
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        font-size: 20px
    }

    th{
        text-align: start;
       

        :first-child{
            width: 50px;
            padding-left: 11px;
        }
    }
`;


export const TableBodyTr = styled.tr`
    background: ${({ theme }) => theme.colors.background};
    height: 52px;

    :nth-child(odd){
        background: ${({ theme }) => theme.colors.background2};
    }

    td{
        max-width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 20px;

        :first-child{
            padding-left: 11px;
        }
    }
`;