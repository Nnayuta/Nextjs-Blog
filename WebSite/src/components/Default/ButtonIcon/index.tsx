import React from 'react';
import * as S from './styled';

interface ButtonProps {
    children: React.ReactNode;
    id?: string;
}

export const ButtonIcon = ({ children, id }: ButtonProps) => {
    return (
        <S.Button id={id}  >{children}</S.Button>
    );
}