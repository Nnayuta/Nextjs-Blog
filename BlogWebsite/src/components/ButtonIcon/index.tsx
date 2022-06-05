import React from 'react';
import * as S from './styled';

const ButtonIcon = ({ children }) => {
    return (
        <S.Button className="material-icons">{children}</S.Button>
    );
}

export default ButtonIcon;
