import React from 'react';
import * as S from './styled';

interface Props {
    objects?: string[];
    children: React.ReactNode;
}

const DropDown = ({ objects, children }: Props) => {
    return (
        <S.DropDown name="" id="">
            <option value="">{children}</option>
            {objects.map(item => (
                <option key={objects.indexOf(item)}>{item}</option>
            ))}
        </S.DropDown>
    );
}

export default DropDown;
