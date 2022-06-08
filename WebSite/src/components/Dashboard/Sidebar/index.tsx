import React, { useState, createContext, useEffect } from 'react';
import SidebarButton from '../SidebarButton';
import * as S from './styled';

const sideBarItems = [
    {
        title: 'Painel',
        background: '#FCFCFC',
    },
    {
        title: 'Artigos',
        background: '#F0F0F0'
    },
    {
        title: 'Multimidia',
        background: '#FCFCFC'
    },
    {
        title: 'Configurações',
        background: '#F0F0F0'
    }
];

const SideBar = ({ active, onClick }) => {

    return (
        <S.SideContainer>
            <S.Container>
                {sideBarItems.map((item, index) => (
                    <li key={index}>
                        <SidebarButton
                            isActive={index === active}
                            onclick={() => onClick(index)}
                            background={active != index ? item.background : ''}
                        >{item.title}
                        </SidebarButton>
                    </li>
                ))}
            </S.Container>
            <S.Logout>Logout</S.Logout>
        </S.SideContainer>
    );
}

export default SideBar;
