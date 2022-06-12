import React from 'react';

interface ICheckboxProps {
    id?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked?: boolean;
}

const Checkbox = ({ id, name, onChange, isChecked }: ICheckboxProps) => {
    return (
        <input type='checkbox' name={name} id={id} checked={isChecked} onChange={onChange}/>
    );
}

export default Checkbox;
