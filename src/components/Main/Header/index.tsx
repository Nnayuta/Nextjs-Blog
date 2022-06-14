import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { ButtonIcon } from '../../Default/ButtonIcon';
import LinkIcon from '../../Default/LinkIcon';
import * as S from './styled';

const NayTitle = "Nayuta";
const DizzTitle = "DizzProject";
const Description = 'Caros amigos, a infinita diversidade da realidade única cumpre um papel essencial na formulação das condições epistemológicas e cognitivas exigidas. É por isso que Baudrillard e Deleuze - em sua melhor forma - concordaram que uma mutação pós-jungiana recorre à experiência efetiva da fundamentação metafísica das representações. Assim mesmo, a estrutura atual da ideação semântica exige a precisão e a definição do sistema de conhecimento geral.';

const Header: React.FC = () => {

    const { user } = useContext(AuthContext);
    return (
        <S.Header>
            <S.ButtonArea>
                <ButtonIcon>search</ButtonIcon>
                {user ? <LinkIcon href='/dashboard'>settings</LinkIcon> : null}
            </S.ButtonArea>
            <S.Title>
                <h1>{`${DizzTitle} & ${NayTitle}`}</h1>
            </S.Title>
            <S.Paragraph>{Description}</S.Paragraph>
        </S.Header>
    );
}

export default Header;
