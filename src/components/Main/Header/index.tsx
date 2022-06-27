import React, { useContext } from 'react';
import useSWR from 'swr';
import { AuthContext } from '../../../contexts/AuthContext';
import { ButtonIcon } from '../../Default/ButtonIcon';
import LinkIcon from '../../Default/LinkIcon';
import * as S from './styled';

const Header: React.FC = () => {

    const { user } = useContext(AuthContext);
    const { data } = useSWR('/api/public/settings')
    
    return (
        <S.Header>
            <S.ButtonArea>
                <ButtonIcon>search</ButtonIcon>
                {user ? <LinkIcon href='/dashboard'>settings</LinkIcon> : null}
            </S.ButtonArea>
            <S.Title>
                <h1>{data?.title}</h1>
            </S.Title>
            <S.Paragraph>{data?.description}</S.Paragraph>
        </S.Header>
    );
}

export default Header;
