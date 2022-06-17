import React, { useContext, useEffect, useState } from 'react';
import * as S from './styled';

import { ButtonIcon } from '../../Default/ButtonIcon';
import { UserModel } from '../../../models/UserModel';

interface SidebarConfigProps {
    user: UserModel;
}

const SideBarConfig: React.FC<SidebarConfigProps> = ({ user }) => {

    const [avatar, setAvatar] = useState('/images/default_avatar.jpg');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (user) {
            setAvatar(user?.avatar);
            setName(user?.displayName);
            setUsername(user?.username);
        }
    }, [user]);

    const [changeAvatar, setChangeAvatar] = useState(true);
    const [changeName, setChangeName] = useState(true);

    const [changeUsername, setChangeUsername] = useState(true);
    const [changePassword, setChangePassword] = useState(true);

    return (
        <S.Container>
            <S.WrapperGeneralData>
                <S.Title>Dados Pessoais</S.Title>
                <S.GeneralDataContainer>
                    <div>
                        <S.WrapperDataInputs>
                            <label>Username:</label>
                            <input type="email" placeholder={username} disabled={changeUsername} />
                            <ButtonIcon onClick={() => { setChangeUsername(!changeUsername); }}>create</ButtonIcon>
                        </S.WrapperDataInputs>
                        <S.WrapperDataInputs>
                            <label>Senha:</label>
                            <input type="text" placeholder={'*****'} disabled={changePassword} />
                            <ButtonIcon onClick={() => { setChangePassword(!changePassword); }}>create</ButtonIcon>
                        </S.WrapperDataInputs>
                        <S.WrapperAvatar>
                            <label htmlFor="">Avatar:</label>
                            <section>
                                <img src={`${avatar}`} className={'avatar'} alt="me" width="177" height="177" />
                                <img src={`${avatar}`} className={'avatar'} alt="me" width="128" height="128" />
                                <img src={`${avatar}`} className={'avatar'} alt="me" width="70" height="70" />
                            </section>
                        </S.WrapperAvatar>
                    </div>
                    <div>
                        <S.WrapperDataInputs>
                            <label htmlFor="">Nome de Exibição:</label>
                            <input type="text" placeholder={name} id={'name'} disabled={changeName} />
                            <ButtonIcon onClick={() => { setChangeName(!changeName); }}>create</ButtonIcon>
                        </S.WrapperDataInputs>
                        <S.WrapperTextArea>
                            <label htmlFor="biografia">Biografia:</label>
                            <div>
                                <textarea name="biografia" id="biografia" cols={40} rows={10} disabled></textarea>
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
                        <input type="text" value={'Gostosa.com'} disabled />
                        <ButtonIcon>create</ButtonIcon>
                    </S.WrapperDataInputs>
                    <S.WrapperTextArea>
                        <label htmlFor="descricao">Descrição:</label>
                        <textarea name="descricao" id="descricao" cols={40} rows={10} disabled></textarea>
                    </S.WrapperTextArea>
                </div>
            </div>
        </S.Container>
    );
}

export default SideBarConfig;
