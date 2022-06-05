import React from 'react';
import * as S from './styled';

interface PostCardProps {
    children: React.ReactNode;
    image: string;
    Destaque?: boolean;
}

const PostCard = ({ children, image, Destaque }: PostCardProps) => {
    return (
        <S.Card id={Destaque ? 'Destaque' : '' }>
            <S.Image src={image} />
        </S.Card>
    );
}

export default PostCard;
