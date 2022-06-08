import HeadSEO from '../../components/Default/Head';
import PostLayout from '../../components/Main/PostLayout';
import * as db from '../../providers/Posts-Provider';

  export async function getStaticPaths() {
    const posts = await db.getAllPosts()

    const paths = posts.map(post => ({
      params: {
        title: post.title.replaceAll(' ', '-'),
      },
    }));

    return {
      paths: [
        ...paths,
      ],
      fallback: false,
    }
  }

  export async function getStaticProps({ params }) {
    const post = await db.getPost((params.title).replaceAll('-', ' '));

    return {
      props: {
        post,
      },
    }
  }

  export default function Post(props) {
    const { title, content, imagePath } = props.post;

    return (
      <PostLayout>
        <HeadSEO title={title} url={(title).replaceAll(' ', '-')}/>
        <title>{title}</title>
        <h1>{title}</h1>
        <img src={imagePath} height={'300px'} alt={title} />
        <p>{content}</p>
      </PostLayout>
    )
  }
