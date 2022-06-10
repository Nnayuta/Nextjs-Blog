import React from 'react';
import LinkIcon from '../../Default/LinkIcon';
import HeadSEO from '../../Default/Head';
import * as S from './styled';

const Header = () => {
    return (
        <>
            <HeadSEO title="Dashboard" url={'/dashboard'} />
            <S.Header>
                <S.Container>
                    <S.Logo></S.Logo>
                    <LinkIcon href='/'>home</LinkIcon>
                    <LinkIcon>mark_chat_unread</LinkIcon>
                </S.Container>
                <S.Container>
                    <LinkIcon>create</LinkIcon>
                    <LinkIcon>search</LinkIcon>
                    <LinkIcon isActive>settings</LinkIcon>
                </S.Container>
            </S.Header>
        </>
    );
}

export default Header;
