import React from 'react';
import * as S from './styled';

export interface ISideBarProps {
    children: React.ReactNode;
    onclick?: () => void;
    isActive?: boolean;
    type?: 'button' | 'submit' | 'reset';
    hoverActive?: boolean;
}

const SidebarButton: React.FC<ISideBarProps> = ({ children, onclick, isActive, type, hoverActive }) => {
    return (
        <S.liContainer>
            <S.SideButton
                type={type}
                isActive={isActive}
                onClick={onclick}
                hoverActive={hoverActive}
            >{children}</S.SideButton>
        </S.liContainer>
    );
}

export default SidebarButton;
