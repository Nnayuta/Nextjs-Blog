import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthContext';
import * as S from './styled';

const LoginArea: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const handleSignIn = async (data) => {
        await signIn(data);
    }

    return (
        <S.FormContainer>
            <S.LoginArea onSubmit={handleSubmit(handleSignIn)}>
                <S.Container>
                    <label>E-mail:</label>
                    <input
                        {...register('email')}
                        name="email"
                        type="text"
                        autoComplete='email'
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
