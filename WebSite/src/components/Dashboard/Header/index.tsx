import React from 'react';
import ButtonIcon from '../../Default/ButtonIcon';
import HeadSEO from '../../Default/Head';
import * as S from './styled';

const Header = () => {
    return (
        <>
            <HeadSEO title="Dashboard" url={'/dashboard'} />
            <S.Header>
                <S.Container>
                    <S.Logo></S.Logo>
                    <ButtonIcon href='/'>home</ButtonIcon>
                    <ButtonIcon>mark_chat_unread</ButtonIcon>
                </S.Container>
                <S.Container>
                    <ButtonIcon>create</ButtonIcon>
                    <ButtonIcon>search</ButtonIcon>
                    <ButtonIcon isActive>settings</ButtonIcon>
                </S.Container>
            </S.Header>
        </>
    );
}

export default Header;
