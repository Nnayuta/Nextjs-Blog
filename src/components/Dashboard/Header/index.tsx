import React, { useState } from 'react';
import LinkIcon from '../../Default/LinkIcon';
import HeadSEO from '../../Default/Head';
import * as S from './styled';
import { ButtonIcon } from '../../Default/ButtonIcon';

interface IHeaderProps {
    createPostOnClick: (id: number) => void;
    activeHeader: number;
}

const Header: React.FC<IHeaderProps> = ({ createPostOnClick, activeHeader }) => {

    return (
        <>
            <HeadSEO title="Dashboard" url={'/dashboard'} />
            <S.Header>
                <S.Container>
                    <S.Logo></S.Logo>
                    <LinkIcon className='home' href='/'>home</LinkIcon>
                    <ButtonIcon hoverActive id='Notification' insideValue={0}>mark_chat_unread</ButtonIcon>
                </S.Container>
                <S.Container>
                    <ButtonIcon hoverActive={activeHeader === 0} isActive={activeHeader === 1} onClick={() => createPostOnClick(1)}>create</ButtonIcon>
                    <ButtonIcon hoverActive>search</ButtonIcon>
                    <ButtonIcon hoverActive={activeHeader === 1} isActive={activeHeader === 0} onClick={() => createPostOnClick(0)}>settings</ButtonIcon>
                </S.Container>
            </S.Header>
        </>
    );
}

export default Header;
