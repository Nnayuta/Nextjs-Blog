import React from 'react';
import * as S from './styled';

interface ISearchInput {
    onChange?: (e) => void;
}

export const SearchInput = ({ onChange }: ISearchInput) => {
    return (
        <S.SearchInput onChange={onChange} type="text" />
    );
}