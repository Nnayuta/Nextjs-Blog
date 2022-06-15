import React, { useEffect, useState } from 'react';
import { ButtonIcon } from '../../Default/ButtonIcon';
import Checkbox from '../../Default/Checkbox';
import DropDown from '../../Default/Dropdown';
import LinkIcon from '../../Default/LinkIcon';
import { SearchInput } from '../../Default/SearchInput';
import * as S from './styled';

import { Post } from '../../../models/Post';

interface ISidebarArtigoProps {
    posts: Post[];
}

const SidebarArtigo: React.FC<ISidebarArtigoProps> = ({ posts }) => {

    const [filter, setFilter] = useState('tudo');
    const [postList, setPostList] = useState<Post[]>([]);
    const [search, setSearch] = useState('');

    const [publicados, setPublicados] = useState<Post[]>([]);
    const [rascunhos, setRascunhos] = useState<Post[]>([]);

    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [date, setDate] = useState([]);

    useEffect(() => {
        const publicados = posts.filter(postsList => postsList.public === true);
        const rascunhos = posts.filter(postsList => postsList.public === false);

        setPublicados(publicados);
        setRascunhos(rascunhos);

        const setDropdownCategoryByPostList = (cat: Post[]) => {
            const categorias = cat.map(postsList => postsList.category).filter((categoria, index, self) => self.indexOf(categoria) === index);
            setCategorias(categorias)
        }

        const setPostListByCategoryAndSearch = (postProps: Post[], category) => {
            if (category != '') {
                setPostList(
                    postProps.filter(post => post.category === categoria
                        && (post.title.toLowerCase().includes(search.toLowerCase()) ||
                            post.author.toLowerCase().includes(search.toLowerCase())
                        )))
            }
            else {
                setPostList(
                    postProps.filter(post => (post.title.toLowerCase().includes(search.toLowerCase())
                        || post.author.toLowerCase().includes(search.toLowerCase()))
                    ))
            }
        }

        switch (filter) {
            case 'publicados':
                setDropdownCategoryByPostList(publicados)
                setPostListByCategoryAndSearch(publicados, categoria);
                break;
            case 'rascunhos':
                setDropdownCategoryByPostList(rascunhos)
                setPostListByCategoryAndSearch(rascunhos, categoria)
                break;
            default:
                setDropdownCategoryByPostList(posts)
                setPostListByCategoryAndSearch(posts, categoria)
                break;
        }

    }, [posts, filter, categoria, search]);


    // SideBar Checkbox

    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isChecked, setIsChecked] = useState([]);

    const tableCheckboxOnChange = (e) => {
        const { id, checked } = e.target;
        setIsChecked([...isChecked, id])
        if (!checked) {
            setIsChecked(isChecked.filter(item => item !== id));
        }
    }

    const tableCheckboxOnChangeAll = (e) => {
        setIsCheckedAll(!isCheckedAll);
        setIsChecked(posts.map((post, index) => index.toString()));
        if (isCheckedAll) {
            setIsChecked([]);
        }
    }

    //

    const categoryDropdownonChange = (e) => {
        const { value } = e.target;
        setCategoria(value);
    }

    const searchInputOnChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    }

    const [searchInputOpen, setSearchInputOpen] = useState(false);

    const searchInputOnClick = () => {
        setSearchInputOpen(!searchInputOpen);
    }

    return (
        <S.Container>
            <S.ContainerPostCount>

                <button
                    id={filter === 'tudo' ? 'active' : ''}
                    onClick={() => { setFilter('tudo') }}
                >Tudo ({posts.length})</button>

                <button
                    id={filter === 'publicados' ? 'active' : ''}
                    onClick={() => { setFilter('publicados') }}
                >Publicados ({publicados.length})</button>

                <button
                    id={filter === 'rascunhos' ? 'active' : ''}
                    onClick={() => { setFilter('rascunhos') }}
                >Rascunhos ({rascunhos.length})</button>

            </S.ContainerPostCount>
            <S.ContainerFilterSearch>
                <S.FilterSearch>
                    <DropDown objects={date}>Datas</DropDown>
                    <DropDown onChange={categoryDropdownonChange} objects={categorias}>Categorias</DropDown>
                </S.FilterSearch>
                <S.FilterSearch>            
                    <SearchInput name='Search on table' display={searchInputOpen} onChange={searchInputOnChange} />
                    <ButtonIcon insideValue={search ? 'Search': ''} onClick={searchInputOnClick} hoverActive isActive={searchInputOpen}>search</ButtonIcon>
                </S.FilterSearch>
            </S.ContainerFilterSearch>
            <S.Table>
                <thead>
                    <S.theadTr>
                        <th>
                            <Checkbox
                                id='selectAll'
                                name='selectAll'
                                isChecked={isCheckedAll}
                                onChange={tableCheckboxOnChangeAll} />
                        </th>
                        <th>Título</th>
                        <th>Author</th>
                        <th>Categoria</th>
                        <th id='icon'>chat_bubble_outline</th>
                        <th>Data</th>
                        <th></th>
                    </S.theadTr>
                </thead>
                <tbody>
                    {postList.map((post, index) => (
                        <S.tbodyTr key={index}>
                            <td>
                                <Checkbox
                                    id={index.toString()}
                                    name={post.title}
                                    isChecked={isChecked.includes(index.toString())}
                                    onChange={tableCheckboxOnChange}
                                />
                            </td>
                            <td>
                                {post?.title}</td>
                            <td>{post?.author}</td>
                            <td>{post?.category}</td>
                            <td>
                                <ButtonIcon insideValue={post.comments.length}>chat_bubble_outline</ButtonIcon>
                            </td>
                            <td id='Data'>
                                <p>{post.updatedAt ? 'Última Modificação': 'Data de Publicação'}</p>
                                <p>{post.updatedAt ? `${post.updatedAt}`: `${post.publisedAt}`}</p>
                            </td>
                            <td>
                                <ButtonIcon hoverActive>edit</ButtonIcon>
                                <ButtonIcon hoverActive>delete</ButtonIcon>
                                <LinkIcon href={`/post/${(post.title).replaceAll(" ", "-")}`}>preview</LinkIcon>
                            </td>
                        </S.tbodyTr>
                    ))}
                </tbody>
            </S.Table>
        </S.Container>
    );
}

export default SidebarArtigo;
