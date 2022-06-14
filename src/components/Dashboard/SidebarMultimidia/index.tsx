import React from 'react';
import { ButtonIcon } from '../../Default/ButtonIcon';
import DropDown from '../../Default/Dropdown';
import { SearchInput } from '../../Default/SearchInput';
import * as S from './styled';

const SidebarMultimidia: React.FC = () => {

    return (
        <S.Container>
            <div>
                <S.AddButton>Adicionar</S.AddButton>
            </div>
            <S.FilterContainer>
                <S.WrapperFilter>
                    <S.WrapperGridType>
                        <ButtonIcon>view_list</ButtonIcon>
                        <ButtonIcon id={'Active'}>grid_view</ButtonIcon>
                    </S.WrapperGridType>
                    <DropDown >Data</DropDown>
                    <DropDown >Todos</DropDown>
                </S.WrapperFilter>
                <S.WrapperFilter>
                    <SearchInput name='Search on List'/>
                    <ButtonIcon>search</ButtonIcon>
                </S.WrapperFilter>
            </S.FilterContainer>
            <S.GridContainer>
                <p>A mostrar 0 de 0 itens multimidia</p>
                <S.GridImage>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </S.GridImage>
            </S.GridContainer>
        </S.Container>
    );
}

export default SidebarMultimidia;
