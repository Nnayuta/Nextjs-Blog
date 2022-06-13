import React from 'react';
import SidebarButton from '../SidebarButton';
import { sideBarItems } from './sidebarItems';

import * as S from './styled';

interface ISideBarProps {
    active: number;
    onClick: (index: number) => void;
}

const SideBar: React.FC<ISideBarProps> = ({ active, onClick }) => {

    return (
        <S.SideContainer>
            <S.Container>
                {sideBarItems.map((item, index) => (
                    <SidebarButton
                        key={index}
                        isActive={index === active}
                        onclick={() => onClick(index)}
                    >{item.title}
                    </SidebarButton>
                ))}
            </S.Container>
            <S.Logout>Logout</S.Logout>
        </S.SideContainer>
    );
}

export default SideBar;
