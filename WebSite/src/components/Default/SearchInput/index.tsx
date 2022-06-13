import React from 'react';
import * as S from './styled';

export interface ISearchInputProps {
    onChange?: (e) => void;
    display?: boolean;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ onChange, display }) => {
    return (
        <S.SearchInput display={display} onChange={onChange} type="text" />
    );
}