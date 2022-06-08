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

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
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