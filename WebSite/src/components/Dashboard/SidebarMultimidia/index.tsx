import React from 'react';
import ButtonIcon from '../../Default/ButtonIcon';
import DropDown from '../../Default/Dropdown';
import * as S from './styled';

const SidebarMultimidia = () => {

    const data = []

    return (
        <S.Container>
            <div>
                <button>Adicionar</button>
            </div>
            <S.FilterContainer>
                <div>
                    <ButtonIcon>view_list</ButtonIcon>
                    <ButtonIcon>grid_view</ButtonIcon>
                    <DropDown objects={data}>Data</DropDown>
                    <DropDown objects={data}>Todos</DropDown>
                </div>
                <div>
                    <input type="text" />
                    <ButtonIcon>search</ButtonIcon>
                </div>
            </S.FilterContainer>
            <S.GridContainer>
                <p>A mostrar 7 de 7 itens multimidia</p>
                <S.GridImage>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    
                </S.GridImage>
            </S.GridContainer>
        </S.Container>
    );
}

export default SidebarMultimidia;
