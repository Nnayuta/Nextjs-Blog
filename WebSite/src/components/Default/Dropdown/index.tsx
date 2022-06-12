import React from 'react';
import * as S from './styled';

interface Props {
    objects?: string[];
    children: React.ReactNode;
    onChange?: (e) => void;
}

const DropDown = ({ objects, children, onChange }: Props) => {
    
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
