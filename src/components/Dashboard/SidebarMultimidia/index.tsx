import React from 'react';
import useSWR from 'swr';
import { MultimidiaModel } from '../../../models/MultimidiaModel';
import { AxiosAPI } from '../../../services/axios';
import { ButtonIcon } from '../../Default/ButtonIcon';
import { DropDown } from '../../Default/Dropdown';
import { Loading } from '../../Default/Loading';
import { SearchInput } from '../../Default/SearchInput';
import * as S from './styled';

export const SidebarMultimidia: React.FC = () => {

    const { data: multimidia, mutate } = useSWR<MultimidiaModel[]>('/api/private/files/upload');

    const [image, setImage] = React.useState(null);

    const uploadToClient = async (event) => {
        if (event.target.files[0]) {
            const image = event.target.files[0];
            setImage(image);

            const formData = new FormData();
            formData.append('file', image);

            await AxiosAPI.post('/api/private/files/upload', formData)

            mutate([], true);

            event.target.value = '';
        }
    }

    const deleteImage = async (id: string) => {
        await AxiosAPI.delete(`/api/private/files/${id}`);
        mutate([], true);
    }

    return (
        <S.Container>
            <S.FileUpload>
                <label htmlFor="imageUpload">Adicionar</label>
                <input
                    type="file"
                    name="imageUpload"
                    id='imageUpload'
                    accept='image/png, image/jpeg'
                    onChange={uploadToClient}
                />
            </S.FileUpload>
            <S.FilterContainer>
                <S.WrapperFilter>
                    <S.WrapperGridType>
                        <ButtonIcon>view_list</ButtonIcon>
                        <ButtonIcon id={'Active'}>grid_view</ButtonIcon>
                    </S.WrapperGridType>
                    <DropDown >Data</DropDown>
                    <DropDown >Todos</DropDown>
                </S.WrapperFilter>
                <S.WrapperFilter>
                    <SearchInput name='Search on List' />
                    <ButtonIcon>search</ButtonIcon>
                </S.WrapperFilter>
            </S.FilterContainer>
            <S.GridContainer>
                <p>{`A mostrar 0 de ${multimidia && multimidia.length} itens multimidia`}</p>
                <S.GridImage>
                    {multimidia?.map((file, index) => (
                        <div key={index} onClick={() => {
                            const deleteConfirm = confirm(`Deseja deletar a imagem: '${file.name}' ?`)

                            if (deleteConfirm) {
                                deleteImage(file._id)
                            }
                        }} >
                            <img src={`.${file.path}`} alt={file.name} />
                        </div>
                    ))}
                </S.GridImage>
            </S.GridContainer>
            {!multimidia && <Loading />}
        </S.Container>
    );
}