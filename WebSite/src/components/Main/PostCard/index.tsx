import Link from 'next/link';
import React from 'react';
import * as S from './styled';

interface PostModel{
    title: string;
    imagePath: string;
}

interface PostCardProps {
    Post: object;
    Destaque?: boolean;
}

const PostCard = ({ Post, Destaque }: PostCardProps) => {

    const { title, imagePath } = Post as PostModel;

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
