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
    const [imagePath, setImagePath] = useState('')

    useEffect(() => {
        if (Post) {
            setTitle(Post?.title)
            setImagePath(Post?.imagePath)
        }
    }, [Post])

    if (!imagePath) {
        return (
            <Loading />
        )
    }

    return (
        <Link href={`/post/${Post._id}`}>
            <S.PostContainer Destaque={Destaque}>
                <S.CardContainer Destaque={Destaque}>
                    <div>
                        <strong>{title}</strong>
                        <p>Caros amigos, a infinita diversidade da realidade única cumpre um papel essencial na formulação das condições epistemológicas e cognitivas exigidas. É por isso que Baudrillard e Deleuze - em sua melhor forma - concordaram que uma mutação pós-jungiana recorre à experiência efetiva da fundamentação metafísica das representações. Assim mesmo, a estrutura atual da ideação semântica exige a precisão e a definição do sistema de conhecimento geral.</p>
                    </div>
                </S.CardContainer>
                <S.CardImage
                    src={imagePath}
                    alt={title}
                    width={Destaque ? 828 : 400}
                    height={435}
                />
            </S.PostContainer>
        </Link>
    );
}