import React from 'react';
import * as S from './styled';

export interface ISearchInputProps {
    name: string;
    show?: boolean;
    onChange?: (e) => void;
}

export const SearchInput: React.FC<ISearchInputProps> =
    ({
        name = 'Search',
        onChange,
        show
    }) => {
        return (
            <S.SearchInput
                name={name}
                onChange={onChange}
                show={show}
                type='text'
            />
        );
    }