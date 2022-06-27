import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard';
import * as S from './styled';

import useSWR from 'swr';
import { PostModel } from '../../../models/PostModel';
import { ButtonIcon } from '../../Default/ButtonIcon';
import Loading from '../../Default/Loading';

const PostGallery: React.FC = () => {

    const [perPage, setPerPage] = useState(5)
    const { data, mutate } = useSWR<PostModel[]>(`/api/posts?&per_page=${perPage}`);

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (data) {
            setPosts(data)
        }

    }, [data, posts])

    const handleExpandMore = () => {
        setPerPage(perPage + 3)
        mutate(posts, true)
    }

    return (
        <S.Container>
            <S.GridPosts>
                {posts?.map((post, index) => (
                    index === 0 ?
                        <PostCard key={index} Post={post} Destaque />
                        :
                        <PostCard key={index} Post={post} />
                ))}
            </S.GridPosts>
            {!data && <Loading />}
            <ButtonIcon
                hoverActive
                onClick={handleExpandMore}
            >expand_more</ButtonIcon>
        </S.Container>
    );
}

export default PostGallery;
