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

    button{
        font-size: 20px;
    }
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
    color: #262322;

    input[type="checkbox"]{
        width: 17px;
        height: 17px;
        margin-left: 11px;
        color: #EE7674;
        box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.25);

        &:hover{
            cursor: pointer;
        }
    }
`;

export const theadTr = styled.tr`
    background: #FCFCFC;
    border: 1px solid #ECECEC;
    height: 34px;
    user-select: none;

    th{
        text-align: start;
        
        h3{
            font-family: 'Material Icons';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
        }

        button{
            font-size: 20px;
            color: #262322;
        }
    }
`;

export const tbodyTr = styled.tr`
    background: #FCFCFC;

    td{
        button{
            font-size: 30px;
        }

        a{
            font-size: 30px;
        }

        #CommentsContainer{
            width: 0;
            height: 0;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;

            button{
                :hover{
                    cursor: pointer;
                    color: #9274EC;
                }
            }
        
            span{
                position: absolute;
                margin-bottom: 5px;

                font-family: 'Dosis';
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 19px;
                color: #262322;
            }
        }
    }

    :nth-child(odd){
        background: #F0F0F0;
    }

    p{
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
    }
`;

