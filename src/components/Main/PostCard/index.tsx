import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as S from './styled';

import { PostModel } from '../../../models/PostModel';
import { Loading } from '../../Default/Loading';

interface IPostCardProps {
    Post: PostModel;
    Destaque?: boolean;
}

export interface PostCard {
    Destaque?: boolean
}

export const PostCard: React.FC<IPostCardProps> = ({ Post, Destaque }) => {

    const [title, setTitle] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (Post) {
            setTitle(Post?.title)
            setThumbnail(Post?.thumbnail)
            setDescription(Post?.description)
        }
    }, [Post])

    if (!thumbnail) {
        return (
            <Loading />
        )
    }

    return (
        <Link href={`/post/${Post?.slug}`}>
            <S.PostContainer Destaque={Destaque}>
                <S.CardContainer Destaque={Destaque}>
                    <div>
                        <strong>{title}</strong>
                        <p>{description}</p>
                    </div>
                </S.CardContainer>
                <S.CardImage
                    src={`/uploads/${thumbnail}`}
                    alt={title}
                    width={Destaque ? 828 : 400}
                    height={435}
                />
            </S.PostContainer>
        </Link>
    );
}