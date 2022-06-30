import Router from 'next/router';
import { destroyCookie } from 'nookies';
import React from 'react';

import { SidebarButton } from '../SidebarButton';
import { sideBarItems } from './sidebarItems';

import * as S from './styled';

interface ISideBarProps {
    active: number;
    onClick: (index: number) => void;
}

export const SideBar: React.FC<ISideBarProps> = ({ active, onClick }) => {

    const handleLogout = () => {
        destroyCookie(null, 'blog-token');
        Router.reload();
    }

    return (
        <S.SideContainer>
            <S.Container>
                {sideBarItems.map((item, index) => (
                    <SidebarButton
                        key={index}
                        isActive={index === active}
                        onclick={() => onClick(index)}
                    >{item.title}
                    </SidebarButton>
                ))}
            </S.Container>
            <S.Logout onClick={handleLogout}>Logout</S.Logout>
        </S.SideContainer>
    );
}