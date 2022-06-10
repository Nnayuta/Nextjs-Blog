import React from 'react';
import { ButtonIcon } from '../../Default/ButtonIcon';
import DropDown from '../../Default/Dropdown';
import { SearchInput } from '../../Default/SearchInput';
import * as S from './styled';

const SidebarMultimidia = () => {

    const data = []

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
                    <DropDown objects={data}>Data</DropDown>
                    <DropDown objects={data}>Todos</DropDown>
                </S.WrapperFilter>
                <S.WrapperFilter>
                    <SearchInput />
                    <ButtonIcon>search</ButtonIcon>
                </S.WrapperFilter>
            </S.FilterContainer>
            <S.GridContainer>
                <p>A mostrar 0 de 0 itens multimidia</p>
                <S.GridImage>
                </S.GridImage>
            </S.GridContainer>
        </S.Container>
    );
}

export default SidebarMultimidia;
