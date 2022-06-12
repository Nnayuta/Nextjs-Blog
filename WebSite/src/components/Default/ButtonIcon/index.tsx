import React from 'react';
import * as S from './styled';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    id?: string;
}

export const ButtonIcon = ({ children, onClick, id }: ButtonProps) => {
    return (
        <S.Button onClick={onClick} id={id}>{children}</S.Button>
    );
}