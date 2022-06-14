import React from 'react';
import * as S from './styled';

interface IDropdownProps {
    objects?: string[];
    children: React.ReactNode;
    onChange?: (e) => void;
}

const DropDown: React.FC<IDropdownProps> = ({ objects, children, onChange }) => {
    
    return (
        <S.DropDown onChange={onChange}>
            <option value="">{children}</option>
            {objects && objects.map(item => (
                <option key={objects.indexOf(item)} value={item}>{item}</option>
            ))}
        </S.DropDown>
    );
}

export default DropDown;
