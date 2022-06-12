import React from 'react';
import * as S from './styled';

interface SideBarProps {
    children: React.ReactNode;
    onclick?: () => void;
    isActive?: boolean;
}

const SidebarButton = ({ children, onclick, isActive }: SideBarProps) => {
    return (
        <S.liContainer>
            <S.SideButton
                id={isActive ? 'active' : 'notActive'}
                onClick={onclick}
            >{children}</S.SideButton>
        </S.liContainer>
    );
}

export default SidebarButton;
