import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthContext';
import { IUserLogin } from '../../../interface/IUserLogin';
import HeadSEO from '../../Default/Head';
import * as S from './styled';

const LoginArea: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const handleSignIn = async (data: IUserLogin) => {
        await signIn(data);
    }

    return (
        <S.FormContainer>
            <HeadSEO title='Login' url='/dashboard' />
            <S.LoginArea onSubmit={handleSubmit(handleSignIn)}>
                <S.Container>
                    <label>Login:</label>
                    <input
                        {...register('username')}
                        name="username"
                        type="text"
                        autoComplete='username'
                        required
                        placeholder=''
                    />
                </S.Container>
                <S.Container>
                    <label>Senha:</label>
                    <input
                        {...register('password')}
                        name="password"
                        type="password"
                        autoComplete='current-password'
                        required
                        placeholder='' />
                </S.Container>
                <S.Container>
                    <button type="submit">Entrar</button>
                </S.Container>
            </S.LoginArea>
        </S.FormContainer>
    );
}

export default LoginArea;
