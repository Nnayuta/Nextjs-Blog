import React from 'react';
import ButtonIcon from '../../Default/LinkIcon';
import PostCard from '../PostCard';
import * as S from './styled';

import { Post } from '../../../models/PostModel';

interface IPostGalleryProps {
    posts: Post[];
}

const PostGallery: React.FC<IPostGalleryProps> = ({ posts }) => {
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
