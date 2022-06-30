import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonIcon } from '../../Default/ButtonIcon';
import { DropDown } from '../../Default/Dropdown';
import { SearchInput } from '../../Default/SearchInput';
import { SidebarButton } from '../SidebarButton';

import * as S from './styled';

export const CreatePost: React.FC = () => {

    const { register, handleSubmit } = useForm();

    const [textAreaValue, setTextAreaValue] = useState('');

    async function textAreaInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextAreaValue(e.target.value);
        localStorage.setItem('textArea', textAreaValue);
    }

    useEffect(() => {
        const textArea = localStorage.getItem('textArea');
        if (textArea) {
            setTextAreaValue(textArea);
        }
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <S.CreateContainer onSubmit={handleSubmit(onSubmit)}>
            <S.WrapperTextArea>
                <S.WrapperTitleDesc>
                    <div>
                        <label>Título:</label>
                        <SearchInput
                            {...register('title')}
                            name='title'
                            show />
                    </div>
                    <div>
                        <label>Descr:</label>
                        <SearchInput
                            {...register('description')}
                            name='desc'
                            show />
                    </div>
                </S.WrapperTitleDesc>
                <S.WrapperIcons>
                    <div>
                        <DropDown>Fonte</DropDown>
                        <S.SeparationLine />
                        <DropDown>Tamanho</DropDown>
                        <S.SeparationLine />
                        <ButtonIcon hoverActive>format_bold</ButtonIcon>
                        <ButtonIcon hoverActive>format_italic</ButtonIcon>
                        <ButtonIcon hoverActive>format_underlined</ButtonIcon>
                        <ButtonIcon hoverActive>strikethrough_s</ButtonIcon>
                        <S.SeparationLine />
                        <ButtonIcon hoverActive>format_paint</ButtonIcon>
                        <ButtonIcon hoverActive>format_clear</ButtonIcon>
                        <S.SeparationLine />
                        <ButtonIcon hoverActive>format_color_text</ButtonIcon>
                        <ButtonIcon hoverActive>brush</ButtonIcon>

                        <S.SeparationLine />

                        <ButtonIcon hoverActive>link</ButtonIcon>
                        <ButtonIcon hoverActive>link_off</ButtonIcon>
                    </div>
                    <div>
                        <ButtonIcon hoverActive>format_align_left</ButtonIcon>
                        <ButtonIcon hoverActive>format_align_center</ButtonIcon>
                        <ButtonIcon hoverActive>format_align_right</ButtonIcon>
                        <ButtonIcon hoverActive>format_align_justify</ButtonIcon>

                        <S.SeparationLine />

                        <ButtonIcon hoverActive>format_list_numbered</ButtonIcon>
                        <ButtonIcon hoverActive>format_list_bulleted</ButtonIcon>

                        <S.SeparationLine />

                        <ButtonIcon hoverActive>format_quote</ButtonIcon>

                        <S.SeparationLine />

                        <ButtonIcon hoverActive>attach_file</ButtonIcon>
                        <ButtonIcon hoverActive>emoji_emotions</ButtonIcon>
                        <ButtonIcon hoverActive>add_chart</ButtonIcon>
                    </div>
                </S.WrapperIcons>
                <S.RichText
                    {...register('content')}
                    onInput={textAreaInputChange}
                    value={textAreaValue} />
            </S.WrapperTextArea>
            <S.WrapperSideBar>
                <SidebarButton type='submit' isActive>Postar</SidebarButton>
                <SidebarButton type='button' >Visualizar</SidebarButton>
                <SidebarButton type='button' >Rascunho</SidebarButton>
                <SidebarButton type='reset' onclick={() => {
                    localStorage.removeItem('textArea');
                    setTextAreaValue('');
                }} >Cancelar</SidebarButton>
            </S.WrapperSideBar>
        </S.CreateContainer>
    );
}