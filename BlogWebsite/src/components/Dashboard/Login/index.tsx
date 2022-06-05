import * as S from './styled';

const LoginArea = () => {
    return (
        <S.LoginArea>
            <div>
                <label>E-mail:</label>
                <input type="text" placeholder='Digite seu email.'/>
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" placeholder='Digite sua senha.' />
            </div>
            <div>
                <button type="submit">Entrar</button>
            </div>
        </S.LoginArea>
    );
}

export default LoginArea;
