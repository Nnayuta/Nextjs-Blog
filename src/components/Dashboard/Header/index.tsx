import React from 'react';
import LinkIcon from '../../Default/LinkIcon';
import HeadSEO from '../../Default/Head';
import * as S from './styled';
import { ButtonIcon } from '../../Default/ButtonIcon';

interface IHeaderProps {
    createPostOnClick: () => void;
}

const Header: React.FC<IHeaderProps> = ({ createPostOnClick }) => {
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
                    <ButtonIcon hoverActive onClick={createPostOnClick}>create</ButtonIcon>
                    <ButtonIcon hoverActive>search</ButtonIcon>
                    <ButtonIcon isActive >settings</ButtonIcon>
                </S.Container>
            </S.Header>
        </>
    );
}

export default Header;
