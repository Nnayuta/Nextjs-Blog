import LayoutDashboard from "../components/Dashboard/LayoutDashboard";
import LoginArea from "../components/Dashboard/Login";
import * as db from '../providers/Posts-Provider'

const isLoggedIn = true;

export async function getServerSideProps() {
  const posts = await db.getAllPosts()
  const user = await db.getUser()

  return {
    props: {
      posts,
      user,
    },
  }
}

export default function Dashboard({ posts, user }) {
  return (
    <>
      {isLoggedIn ?
        <LayoutDashboard posts={posts} user={user} />
        :
        <LoginArea />
      }
    </>
  )
}
