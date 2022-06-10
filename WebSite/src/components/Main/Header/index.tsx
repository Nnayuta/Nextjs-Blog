import React from 'react';
import ButtonIcon from '../../Default/LinkIcon';
import * as S from './styled';

const Title = "DizzProject & Nayuta";
const isAdmin = true;

const Header = () => {
    return (
        <S.Header>
            <S.ButtonArea>
                <ButtonIcon href='#'>search</ButtonIcon>
                {isAdmin ? <ButtonIcon href='/dashboard'>settings</ButtonIcon> : null}
            </S.ButtonArea>
                <S.Title>
                    <h1>{Title}</h1>
                </S.Title>
            <S.Paragraph>Caros amigos, a infinita diversidade da realidade única cumpre um papel essencial na formulação das condições epistemológicas e cognitivas exigidas. É por isso que Baudrillard e Deleuze - em sua melhor forma - concordaram que uma mutação pós-jungiana recorre à experiência efetiva da fundamentação metafísica das representações. Assim mesmo, a estrutura atual da ideação semântica exige a precisão e a definição do sistema de conhecimento geral.</S.Paragraph>
        </S.Header>
    );
}

export default Header;
