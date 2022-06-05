import React from 'react';
import ButtonIcon from '../../ButtonIcon';
import PostCard from '../PostCard';
import * as S from './styled';

const posts = [
    {
        id: 1,
        title: 'Paisagem de um mundo distante!',
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    },
    {
        id: 2,
        title: 'Paisagem de um mundo distante!',
        image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Landscape_Arnisee-region.JPG",
    },
    {
        id: 3,
        title: 'Paisagem de um mundo distante!',
        image: "https://www.grupotecnofix.com.br/wp-content/uploads/2020/04/landscape-mountains-sky-4843193.jpg",
    },
    {
        id: 4,
        title: 'Paisagem de um mundo distante!',
        image: "http://cdn.eso.org/images/screen/millour-01-cc.jpg",
    },
    {
        id: 5,
        title: 'Paisagem de um mundo distante!',
        image: "https://cdnb.artstation.com/p/assets/images/images/030/362/979/large/dawid-znaj-2020-09-17-19-44-04-window.jpg?1600365543",
    },
]

const PostGallery = () => {
    return (
        <S.Container>
            <S.GridPosts>
                {posts.map(post => (
                    post.id === 1 ?
                    <PostCard key={post.id} image={post.image} Destaque>{post.title}</PostCard>
                    :
                    <PostCard key={post.id} image={post.image}>{post.title}</PostCard>
                ))}
            </S.GridPosts>
            <ButtonIcon>expand_more</ButtonIcon>
        </S.Container>
    );
}

export default PostGallery;
