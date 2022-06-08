import React from 'react';
import ButtonIcon from '../../Default/ButtonIcon';
import PostCard from '../PostCard';
import * as S from './styled';

const PostGallery = ({ posts }) => {
    return (
        <S.Container>
            <S.GridPosts>
                {posts.map(post => (
                    posts.indexOf(post) === 0 ?
                        <PostCard key={posts.indexOf(post)} Post={post} Destaque />
                        :
                        <PostCard key={posts.indexOf(post)} Post={post} />
                ))}
            </S.GridPosts>
            <ButtonIcon>expand_more</ButtonIcon>
        </S.Container>
    );
}

export default PostGallery;
