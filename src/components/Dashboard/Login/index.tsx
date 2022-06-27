import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthContext';
import { IUserLogin } from '../../../interface/IUserLogin';
import HeadSEO from '../../Default/Head';
import * as S from './styled';

export interface LoginAreaProps {
    failToConnect?: boolean
}

const LoginArea: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    const [failToConnect, setFailToConnect] = useState(false)

    const handleSignIn = async (data: IUserLogin) => {
        try {
            await signIn(data)
        } catch (error) {
            switch (error.status) {
                case 401:
                    setFailToConnect(true)
                    setTimeout(() => {
                        setFailToConnect(false)
                    }, 2000);
                    break

                default:
                    break
            }
        }
    }

    return (
        <S.FormContainer>
            <HeadSEO title='Login' url='/dashboard' />
            <S.LoginArea onSubmit={handleSubmit(handleSignIn)}>
                <S.Container failToConnect={failToConnect} >
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
                <S.Container failToConnect={failToConnect}>
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
