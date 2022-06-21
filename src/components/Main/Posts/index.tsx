import React from 'react';
import { PostModel } from '../../../models/PostModel';
import HeadSEO from '../../Default/Head';
import LinkIcon from '../../Default/LinkIcon';
import Header from '../Header';
import * as S from './styled';

interface IPostProps {
    post: PostModel;
}

const PostPage: React.FC<IPostProps> = ({ post }) => {

    return (
        <>
            <HeadSEO title={post.title} url={`/post/${post._id}`} />
            <S.MainContainer>
                {post &&
                    <S.Container>
                        <Header />
                        <LinkIcon href='/' >home</LinkIcon>
                        <S.PostContainer>
                            <div>
                                <h1>{post.title}</h1>
                                <label htmlFor="">{post.category}</label>
                                <img src={post.imagePath} alt="" />
                            </div>
                            <div>
                                <p>{post.content}</p>
                            </div>
                            <div>
                                <label htmlFor="">Author: {post.author.displayName}</label>
                                <div>
                                    <img src={post.author.avatar} alt="Author Avatar" />
                                </div>
                            </div>
                        </S.PostContainer>
                    </S.Container>
                }
            </S.MainContainer>
        </>
    );
}

export default PostPage;