import { GetStaticPaths, GetStaticProps } from 'next';
import PostSchema from '../../schema/PostSchema';
import { MongoConnection } from '../../services/mongoose';

import { PostModel } from '../../models/PostModel';
import PostPage from '../../components/Main/Posts';

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

  return (
    <PostPage post={post} />
  )
}

export default post;