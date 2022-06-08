import LayoutDashboard from "../components/Dashboard/LayoutDashboard";
import LoginArea from "../components/Dashboard/Login";
import * as db from '../providers/Posts-Provider'

const isLoggedIn = true;

export async function getStaticProps() {
    const posts = await db.getAllPosts()
  
    return {
      props: {
        posts,
      },
    }
  }

export default function Dashboard({ posts }) {
    return (
        <>
            {isLoggedIn ?
                <LayoutDashboard posts={posts} />
                :
                <LoginArea />
            }
        </>
    )
}
