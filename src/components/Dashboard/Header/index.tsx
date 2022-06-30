import React from 'react';

import { ButtonIcon } from '../../Default/ButtonIcon';
import { LinkIcon } from '../../Default/LinkIcon';

import * as S from './styled';

interface IHeaderProps {
    createPostOnClick: (id: number) => void;
    activeHeader: number;
}

export const Header: React.FC<IHeaderProps> = ({ createPostOnClick, activeHeader }) => {

    return (
        <S.Header>
            <S.Container>
                <S.Logo />
                <LinkIcon className='home' href='/'>home</LinkIcon>
                <ButtonIcon hoverActive id='Notification' insideValue={0}>mark_chat_unread</ButtonIcon>
            </S.Container>
            <S.Container>
                <ButtonIcon hoverActive={activeHeader === 0} isActive={activeHeader === 1} onClick={() => createPostOnClick(1)}>create</ButtonIcon>
                <ButtonIcon hoverActive>search</ButtonIcon>
                <ButtonIcon hoverActive={activeHeader === 1} isActive={activeHeader === 0} onClick={() => createPostOnClick(0)}>settings</ButtonIcon>
            </S.Container>
        </S.Header>
    );
}

