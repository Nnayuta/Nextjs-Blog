import React from 'react';
import * as S from './styled';

const LoginArea: React.FC = () => {
    return (
        <S.FormContainer>
            <S.LoginArea>
                <S.Container>
                    <label>E-mail:</label>
                    <input type="text" placeholder='' />
                </S.Container>
                <S.Container>
                    <label>Senha:</label>
                    <input type="password" placeholder='' />
                </S.Container>
                <S.Container>
                    <button type="submit">Entrar</button>
                </S.Container>
            </S.LoginArea>
        </S.FormContainer>
    );
}

export default LoginArea;
