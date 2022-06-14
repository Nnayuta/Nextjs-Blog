import React from 'react';
import * as S from './styled';

export interface ISearchInputProps {
    name: string;
    display?: boolean;
    onChange?: (e) => void;
}

export const SearchInput: React.FC<ISearchInputProps> =
    ({
        name = 'Search',
        onChange,
        display
    }) => {
        return (
            <S.SearchInput
                name={name}
                onChange={onChange}
                display={display}
                type='text'
            />
        );
    }