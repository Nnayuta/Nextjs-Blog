import Link from 'next/link';
import React from 'react';
import * as S from './styled';

import { PostModel } from '../../../models/PostModel';

interface IPostCardProps {
    Post: PostModel;
    Destaque?: boolean;
}

const PostCard: React.FC<IPostCardProps> = ({ Post, Destaque }) => {

    const { title, imagePath } = Post

    return (
        <Link href={`/post/${Post._id}`}>
            <S.Card id={Destaque ? 'Destaque' : ''}>
                <S.PostImage src={
                    imagePath
                } alt={title} />
                <h2>{title}</h2>
            </S.Card>
        </Link>
    );
}

export default PostCard;
