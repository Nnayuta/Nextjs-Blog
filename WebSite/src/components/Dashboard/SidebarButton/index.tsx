import React from 'react';
import * as S from './styled';

interface SideBarProps {
    children: React.ReactNode;
    onclick?: () => void;
    isActive?: boolean;
    background: string;
}

const SidebarButton = ({ children, onclick, isActive, background }: SideBarProps) => {
    return (
        <S.SideButton
            id={isActive ? 'active' : 'notActive'}
            onClick={onclick}
            style={{ background }}
        >{children}</S.SideButton>
    );
}

export default SidebarButton;
