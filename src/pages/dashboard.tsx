import { useContext } from "react";
import LayoutDashboard from "../components/Dashboard/LayoutDashboard";
import LoginArea from "../components/Dashboard/Login";
import * as db from '../providers/Posts-Provider'
import { AuthContext } from "../contexts/AuthContext";

export async function getServerSideProps() {
  const posts = await db.getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default function Dashboard({ posts }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ?
        <LayoutDashboard posts={posts} user={user} />
        :
        <LoginArea />
      }
    </>
  )
}
