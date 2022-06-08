import { useEffect, useState } from 'react';
import ButtonIcon from '../../Default/ButtonIcon';
import DropDown from '../../Default/Dropdown';
import * as S from './styled';

const SidebarArtigo = ({ posts }) => {

    const [publicados, setPublicados] = useState(0);
    const [rascunhos, setRascunhos] = useState(0);
    const [tudo, setTudo] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [date, setDate] = useState([]);

    useEffect(() => {
        const publicados = posts.filter(post => post.published === true).length;
        const rascunhos = posts.filter(post => post.published === false).length;
        const tudo = posts.length;
        const categorias = posts.map(post => post.categoria).filter((categoria, index, self) => self.indexOf(categoria) === index);

        setPublicados(publicados);
        setRascunhos(rascunhos);
        setTudo(tudo);
        setCategorias(categorias);

    }, [posts]);


    return (
        <S.Container>
            <S.ContainerPostCount>
                <button>Tudo ({tudo})</button>
                <button>Publicados ({publicados})</button>
                <button>Rascunhos ({rascunhos})</button>
            </S.ContainerPostCount>
            <S.ContainerFilterSearch>
                <S.FilterSearch>
                    <DropDown objects={date}>Datas</DropDown>
                    <DropDown objects={categorias}>Categorias</DropDown>
                </S.FilterSearch>
                <S.FilterSearch>
                    <S.SearchInput type="text" />
                    <ButtonIcon>search</ButtonIcon>
                </S.FilterSearch>
            </S.ContainerFilterSearch>
            <S.Table>
                <thead>
                    <S.theadTr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Título</th>
                        <th>Author</th>
                        <th>Categoria</th>
                        <th><ButtonIcon>chat_bubble_outline</ButtonIcon></th>
                        <th>Data</th>
                        <th></th>
                    </S.theadTr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <S.tbodyTr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.categoria}</td>
                            <td>
                                <ButtonIcon>chat_bubble_outline</ButtonIcon>
                            </td>
                            <td>
                                <p>Última Modificação</p>
                                <p>{post.date}</p>
                            </td>
                            <td>
                                {post.published ? <ButtonIcon>public</ButtonIcon> : <ButtonIcon>vpn_lock</ButtonIcon>}
                                <ButtonIcon>edit</ButtonIcon>
                                <ButtonIcon>delete</ButtonIcon>
                                <ButtonIcon href={`/post/${(post.title).replaceAll(" ", "-")}`}>preview</ButtonIcon>
                            </td>
                        </S.tbodyTr>
                    ))}
                </tbody>
            </S.Table>
        </S.Container>
    );
}

export default SidebarArtigo;
