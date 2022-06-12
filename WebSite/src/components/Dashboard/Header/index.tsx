import React from 'react';
import LinkIcon from '../../Default/LinkIcon';
import HeadSEO from '../../Default/Head';
import * as S from './styled';
import { ButtonIcon } from '../../Default/ButtonIcon';

interface Props {
    createPostOnClick: () => void;
}

const Header = ({ createPostOnClick }: Props) => {



    return (
        <>
            <HeadSEO title="Dashboard" url={'/dashboard'} />
            <S.Header>
                <S.Container>
                    <S.Logo></S.Logo>
                    <LinkIcon className='home' href='/'>home</LinkIcon>
                    <LinkIcon>mark_chat_unread</LinkIcon>
                </S.Container>
                <S.Container>
                    <ButtonIcon onClick={createPostOnClick}>create</ButtonIcon>
                    <ButtonIcon>search</ButtonIcon>
                    <ButtonIcon>settings</ButtonIcon>
                </S.Container>
            </S.Header>
        </>
    );
}

export default Header;
