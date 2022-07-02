import Image from 'next/image';
import React from 'react';

import { PostModel } from '../../../models/PostModel';
import { HeadSEO } from '../../Default/Head';
import { LinkIcon } from '../../Default/LinkIcon';
import { Loading } from '../../Default/Loading';
import { Header } from '../Header';

import * as S from './styled';

interface IPostProps {
    post: PostModel;
}

export const PostPage: React.FC<IPostProps> = ({ post }) => {
    return (
        <>
            <HeadSEO title={post?.title} url={`/post/${post?.slug}`} />
            <S.MainContainer>
                <S.Container>
                    <Header />
                    {!post && <Loading />}
                    {post &&
                        <S.PostContainer>
                            <div>
                                <h1>{post.title} <LinkIcon href='/' >home</LinkIcon></h1>
                            </div>
                            <div className='content'>
                                {post.content}
                            </div>
                            <div>
                                <label>Categoria: {post.category}</label>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    {/* <Image src={post?.author?.avatar} alt="Author Avatar" width={'50px'} height={'50px'} /> */}
                                    <label htmlFor="">{post?.author?.displayName}</label>
                                    <p>{post?.author?.bio}</p>
                                </div>
                            </div>
                        </S.PostContainer>}
                </S.Container>
            </S.MainContainer>
        </>
    );
}
