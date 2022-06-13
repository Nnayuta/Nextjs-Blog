import React from 'react';

interface ICheckboxProps {
    id?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked?: boolean;
}

const Checkbox: React.FC<ICheckboxProps> = ({ id, name, onChange, isChecked }) => {
    return (
        <input type='checkbox' name={name} id={id} checked={isChecked} onChange={onChange}/>
    );
}

export default Checkbox;
