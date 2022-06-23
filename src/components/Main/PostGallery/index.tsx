import React from 'react';
import ButtonIcon from '../../Default/LinkIcon';
import PostCard from '../PostCard';
import * as S from './styled';

import useSWR from 'swr';
import { PostModel } from '../../../models/PostModel';
import Loading from '../../Default/Loading';

const PostGallery: React.FC = () => {

    const { data: posts } = useSWR<PostModel[]>('/api/posts');

    return (
        <S.Container>
            {!posts && <Loading />}
            <S.GridPosts>
                {posts?.map((post, index) => (
                    index === 0 ?
                        <PostCard key={index} Post={post} Destaque />
                        :
                        <PostCard key={index} Post={post} />
                ))}
            </S.GridPosts>
            <ButtonIcon>expand_more</ButtonIcon>
        </S.Container>
    );
}

export default PostGallery;
