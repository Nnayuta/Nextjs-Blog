import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { PostPage } from '../../components/Main/Posts';
import { PostModel } from '../../models/PostModel';
import PostSchema from '../../schema/PostSchema';
import UserSchema from '../../schema/UserSchema';
import { MongoDB } from '../../utils/MongoDB';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug
  await MongoDB.connect();
  const postFind = await PostSchema.find({ slug }).populate('author', '-password -__v -createdAt -updatedAt -username', UserSchema).select('-__v');
  await MongoDB.disconnect();
  const post = await JSON.parse(JSON.stringify(postFind))

  return {
    props: {
      post: post[0]
    }
  }
}

interface postProps {
  post: PostModel
}

const post: React.FC<postProps> = (props) => {

  return (
    <PostPage post={props?.post} />
  )
}

export default post;