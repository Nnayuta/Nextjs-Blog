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

export const AddButton = styled.button`
    border: none;
    background: #EE7674;
    border-radius: 5px;
    font-family: 'Dosis';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #FCFCFC;
    padding: 12px;

    &:hover{
        background: #ff7e7bd5;
        cursor: pointer;
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
    background: #FCFCFC;
    border: 1px solid #ECECEC;
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
            color: #EE7674;
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 22px;
    margin-top: 18px;

    div{
        display: flex;
        width: 214px;
        height: 214px;
        background: #BBBBBB;

        :hover{
            background: #EBEBEB;
            cursor: pointer;
        }
    }
`;
