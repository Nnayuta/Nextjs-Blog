import React from 'react';
import { PostModel } from '../../../models/posts.model';
import ButtonIcon from '../../Default/LinkIcon';
import PostCard from '../PostCard';
import * as S from './styled';

interface IPostGalleryProps {
    posts: PostModel[];
}

const PostGallery = ({ posts }: IPostGalleryProps) => {
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
