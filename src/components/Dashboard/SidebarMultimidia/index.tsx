import React from 'react';
import { MultimidiaModel } from '../../../models/MultimidiaModel';
import { ButtonIcon } from '../../Default/ButtonIcon';
import DropDown from '../../Default/Dropdown';
import { SearchInput } from '../../Default/SearchInput';
import * as S from './styled';

interface ISidebarMultimidiaProps {
    multimidia: MultimidiaModel[];
}

const SidebarMultimidia: React.FC<ISidebarMultimidiaProps> = ({ multimidia }) => {

    const [image, setImage] = React.useState(null);

    const uploadToClient = async (event) => {
        if (event.target.files[0]) {
            const image = event.target.files[0];
            setImage(image);

            const formData = new FormData();
            formData.append('file', image);

            await fetch('/api/files/upload', {
                method: 'POST',
                body: formData
            });
        }
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
                <p>A mostrar 0 de 0 itens multimidia</p>
                <S.GridImage>
                    {multimidia.map((i, index) => (
                        <div key={index}>
                            <img src={`.${i.path}`} alt={i.name} />
                        </div>
                    ))}
                </S.GridImage>
            </S.GridContainer>
        </S.Container>
    );
}

export default SidebarMultimidia;
