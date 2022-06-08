import HeadSEO from "../components/Default/Head"
import LayoutMain from "../components/Main/LayoutMain"
import * as db from '../providers/Posts-Provider'

export async function getStaticProps() {
  const posts = await db.getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <HeadSEO title="Home" url={'/'} />
      <LayoutMain posts={posts} />
    </>
  )
}
