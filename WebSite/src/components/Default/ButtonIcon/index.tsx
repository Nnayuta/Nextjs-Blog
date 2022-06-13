import React from 'react';
import * as S from './styled';

export interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    id?: string;
    insideValue?: string | number;
    hoverActive?: boolean;
    isActive?: boolean;
}

export const ButtonIcon: React.FC<IButtonProps> = (
    {
        children,
        onClick,
        id,
        insideValue,
        hoverActive,
        isActive
    }) => {
    return (
        <S.Button
            onClick={onClick}
            insideValue={insideValue}
            id={id}
            hoverActive={hoverActive}
            isActive={isActive}
        >{children}</S.Button>
    );
}