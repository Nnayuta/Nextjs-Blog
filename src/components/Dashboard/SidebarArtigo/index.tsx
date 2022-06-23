import React, { useEffect, useState } from 'react';
import { ButtonIcon } from '../../Default/ButtonIcon';
import Checkbox from '../../Default/Checkbox';
import DropDown from '../../Default/Dropdown';
import LinkIcon from '../../Default/LinkIcon';
import { SearchInput } from '../../Default/SearchInput';
import * as S from './styled';

import { PostModel } from '../../../models/PostModel';

import useSWR from 'swr';
import ApiAxios from '../../../services/axios';
import Loading from '../../Default/Loading';

const SidebarArtigo: React.FC = () => {

    const { data, mutate } = useSWR<PostModel[]>('/api/post');
    const [posts, setPosts] = useState<PostModel[]>([]);

    //Filters
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [openSearch, setOpenSearch] = useState(false);

    const [date, setDate] = useState([]);
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState([]);

    const [published, setPublished] = useState(0);
    const [draft, setDraft] = useState(0);

    const [checkedAll, setCheckedAll] = useState(false);
    const [checkedList, setCheckedList] = useState([]);

    useEffect(() => {
        if (data) {
            setPosts(
                data.filter(post => {
                    switch (filter) {
                        case 'all':
                            return post;
                        case 'published':
                            return post.public;
                        case 'draft':
                            return !post.public;
                    }
                }).filter(post => {
                    if (search) {
                        return post.title.toLowerCase().includes(search.toLowerCase())
                            || post.author.displayName.toLowerCase().includes(search.toLowerCase());
                    }
                    return post;
                }).filter(post => {
                    if (category) {
                        return post.category.toLowerCase() === category.toLowerCase();
                    }
                    return post;
                })
            );

            setPublished(data.filter(post => post.public).length);
            setDraft(data.filter(post => !post.public).length);

            setCategoryList(
                data.filter(post => {
                    switch (filter) {
                        case 'all':
                            return post;
                        case 'published':
                            return post.public;
                        case 'draft':
                            return !post.public;
                    }
                }).map(post => post.category).filter((category, index, self) => self.indexOf(category) === index)
            )

            setDate(
                data.filter(post => {
                    switch (filter) {
                        case 'all':
                            return post;
                        case 'published':
                            return post.public;
                        case 'draft':
                            return !post.public;
                    }
                }).map(post => `${new Date(post.createdAt).toLocaleDateString('pt-BR')}`).filter((date, index, self) => self.indexOf(date) === index)
            )
        }

    }, [data, filter, search, category]);

    const revalidateAll = () => {
        mutate(data, true);
        setCheckedList([]);
        setCheckedAll(false);
    };

    const deletePost = async (id: string) => {
        await mutate(data.filter(post => post._id !== id), false);
        await ApiAxios.delete(`/api/post/${id}`).then(() => {
            alert('Post deletado com sucesso!');
        });
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id } = e.target;
        setCheckedList(checkedList.includes(id) ? checkedList.filter(item => item !== id) : [...checkedList, id])
    };

    const handleCheckedAll = () => {
        setCheckedAll(!checkedAll);
        setCheckedList(posts.map((post) => post._id));
        if (checkedAll) {
            setCheckedList([]);
        }
    };

    return (
        <S.Container>
            <S.ContainerPostCount>
                <S.ContainerPostCountButton
                    onClick={() => setFilter('all')}
                    id={filter === 'all' ? 'active' : ''}
                >{`Tudo (${published + draft})`}</S.ContainerPostCountButton>
                <S.ContainerPostCountButton
                    onClick={() => setFilter('published')}
                    id={filter === 'published' ? 'active' : ''}
                >{`Publicados (${published})`}</S.ContainerPostCountButton>
                <S.ContainerPostCountButton
                    onClick={() => setFilter('draft')}
                    id={filter === 'draft' ? 'active' : ''}
                >{`Rascunhos (${draft})`}</S.ContainerPostCountButton>
            </S.ContainerPostCount>
            <S.ContainerFilterSearch>
                <S.FilterSearch>
                    <DropDown objects={date}>Datas</DropDown>
                    <DropDown onChange={handleCategory} objects={categoryList}>Categorias</DropDown>
                </S.FilterSearch>
                <S.FilterSearch>
                    <SearchInput name='Search on table' display={openSearch} onChange={handleSearch} />
                    <ButtonIcon insideValue={search ? '!' : ''} onClick={() => setOpenSearch(!openSearch)} hoverActive isActive={openSearch}>search</ButtonIcon>
                </S.FilterSearch>
            </S.ContainerFilterSearch>
            <S.ContainerTable>
                <S.Table>
                    <thead>
                        <S.TableHeadTr>
                            <th>
                                <Checkbox
                                    id='selectAll'
                                    name='selectAll'
                                    onChange={handleCheckedAll}
                                    isChecked={checkedAll}
                                />
                            </th>
                            <th>Título</th>
                            <th>Author</th>
                            <th>Categoria</th>
                            <th id='icon'>chat_bubble_outline</th>
                            <th>Data</th>
                            <th>
                                <ButtonIcon onClick={revalidateAll} hoverActive>sync</ButtonIcon>
                            </th>
                        </S.TableHeadTr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <S.TableBodyTr key={index}>
                                <td>
                                    <Checkbox
                                        id={post._id}
                                        name={post._id}
                                        isChecked={checkedList.includes(post._id)}
                                        onChange={handleChecked}
                                    />
                                </td>
                                <td>
                                    {post?.title}
                                </td>
                                <td>
                                    {post?.author?.displayName}
                                </td>
                                <td>
                                    {post?.category}
                                </td>
                                <td>
                                    <ButtonIcon insideValue={post?.comments?.length ? post?.comments?.length : 0}>chat_bubble_outline</ButtonIcon>
                                </td>
                                <td>
                                    <p>{post.updatedAt != post.createdAt
                                        ? 'Última Modificação'
                                        : 'Data de Publicação'}</p>

                                    <p>{post.updatedAt != post.createdAt
                                        ? `${new Date(post.updatedAt).toLocaleDateString('pt-BR')} as ${new Date(post.updatedAt).toLocaleTimeString('pt-BR')}`
                                        : `${new Date(post.createdAt).toLocaleDateString('pt-BR')} as ${new Date(post.createdAt).toLocaleTimeString('pt-BR')}`}
                                    </p>
                                </td>
                                <td>
                                    <ButtonIcon hoverActive>edit</ButtonIcon>
                                    <ButtonIcon
                                        hoverActive
                                        onClick={() => {
                                            const deleteConfirm = confirm(`Deseja deletar o post: '${post.title}' ?`)

                                            if (deleteConfirm) {
                                                deletePost(post._id);
                                            }

                                        }} >delete</ButtonIcon>
                                    <LinkIcon target='_blank' href={`/post/${(post._id)}`}>preview</LinkIcon>
                                </td>
                            </S.TableBodyTr>
                        ))}
                    </tbody>
                </S.Table>
                {!data &&
                    <Loading style={{
                        marginTop: '20px'
                    }} />
                }
            </S.ContainerTable>
        </S.Container>
    );
}

export default SidebarArtigo;
