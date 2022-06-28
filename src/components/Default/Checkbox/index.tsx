import React from 'react';
import * as S from './styled';

interface ICheckboxProps {
    id?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = ({ id, name, onChange, isChecked }) => {
    return (
        <S.Checkbox >
            <input type='checkbox' name={name} id={id} checked={isChecked} onChange={onChange} />
            <span></span>
        </S.Checkbox>
    );
}