import Link from 'next/link';
import React from 'react';
import { PostModel } from '../../../models/posts.model';
import * as S from './styled';

interface PostCardProps {
    Post: PostModel;
    Destaque?: boolean;
}

const PostCard = ({ Post, Destaque }: PostCardProps) => {

    const { title, imagePath } = Post

    return (
        <Link href={`/post/${title.replaceAll(' ' , '-') }`}>
            <S.Card id={Destaque ? 'Destaque' : ''}>
                <S.PostImage src={imagePath} />
                {title}
            </S.Card>
        </Link>
    );
}

export default PostCard;
