import { GetStaticPaths, GetStaticProps } from 'next';
import PostSchema from '../../schema/PostSchema';
import { MongoConnection } from '../../services/mongoose';

import HeadSEO from '../../components/Default/Head';
import { PostModel } from '../../models/PostModel';
import Header from '../../components/Main/Header';

import * as S from "./styled";
import LinkIcon from '../../components/Default/LinkIcon';

const Mongo = new MongoConnection();

export const getStaticPaths: GetStaticPaths = async () => {

  await Mongo.connect();
  const post = await PostSchema.find();
  await Mongo.close();

  const paths = post.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths: [...paths],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id;

  await Mongo.connect();
  const post = await PostSchema.findById(id).populate('author', '-password -__v -createdAt -updatedAt -username').select('-__v')
  await Mongo.close();

  const Post = JSON.parse(JSON.stringify(post));

  return {
    props: {
      post: Post,
    }
  }
}

const post = (props) => {

  const { post }: { post: PostModel } = props

  if (!props.post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HeadSEO title={post.title} url={`/post/${post._id}`} />
      <S.MainContainer>
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
      </S.MainContainer>
    </>
  );
}

export default post;