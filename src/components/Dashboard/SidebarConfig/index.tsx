import React, { useEffect, useState } from 'react';
import * as S from './styled';

import { UserModel } from '../../../models/UserModel';
import { ButtonIcon } from '../../Default/ButtonIcon';
import useSWR from 'swr';
import Image from 'next/image';

interface SidebarConfigProps {
    user: UserModel;
}

const SideBarConfig: React.FC<SidebarConfigProps> = ({ user }) => {

    const [avatar, setAvatar] = useState('/images/default_avatar.jpg');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('A sociedade como um todo é feita de ilusões nos qual devemos seguir, Se você sair desta ilusão você é visto como anormal.')

    const { data } = useSWR('/api/public/settings')

    useEffect(() => {
        if (user) {
            setAvatar(user?.avatar);
            setName(user?.displayName);
            setUsername(user?.username);
        }
    }, [user]);



    return (
        <S.Container>
            <S.WrapperGeneralData>
                <S.Title>Dados Pessoais</S.Title>
                <S.GeneralDataContainer>
                    <div>
                        <S.WrapperDataInputs>
                            <label>Username:</label>
                            <input type="username" defaultValue={username} />
                            <ButtonIcon>create</ButtonIcon>
                        </S.WrapperDataInputs>
                        <S.WrapperDataInputs>
                            <label>Senha:</label>
                            <input type="text" placeholder={'*****'} defaultValue={''} />
                            <ButtonIcon >create</ButtonIcon>
                        </S.WrapperDataInputs>
                        <S.WrapperAvatar>
                            <label htmlFor="" >Avatar:</label>
                            <div>
                                <S.Avatar>
                                    <Image src={avatar} className={'avatar'} alt="avatar" width={177} height={177} />
                                </S.Avatar>
                                <S.Avatar>
                                    <Image src={avatar} className={'avatar'} alt="avatar" width={128} height={128} />
                                </S.Avatar>
                                <S.Avatar>
                                    <Image src={avatar} className={'avatar'} alt="avatar" width={70} height={70} />
                                </S.Avatar>
                            </div>
                        </S.WrapperAvatar>
                    </div>
                    <div>
                        <S.WrapperDataInputs>
                            <label htmlFor="">Nome de Exibição:</label>
                            <input type="text" defaultValue={name} id={'name'} />
                            <ButtonIcon >create</ButtonIcon>
                        </S.WrapperDataInputs>
                        <S.WrapperTextArea>
                            <label htmlFor="biografia">Biografia:</label>
                            <div>
                                <textarea name="biografia" id="biografia" defaultValue={bio} cols={40} rows={10} />
                            </div>
                        </S.WrapperTextArea>
                    </div>
                </S.GeneralDataContainer>
            </S.WrapperGeneralData>
            <div>
                <S.Title>Dados Gerais</S.Title>
                <div>
                    <S.WrapperDataInputs>
                        <label htmlFor="">Título do site:</label>
                        <input type="text" defaultValue={data?.title} disabled />
                        <ButtonIcon>create</ButtonIcon>
                    </S.WrapperDataInputs>
                    <S.WrapperTextArea>
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea name="descricao" id="descricao" cols={40} rows={10} disabled value={data?.description}></textarea>
                    </S.WrapperTextArea>
                </div>
            </div>
        </S.Container>
    );
}

export default SideBarConfig;
