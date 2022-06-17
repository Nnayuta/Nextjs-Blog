import { useContext } from "react";
import LayoutDashboard from "../components/Dashboard/LayoutDashboard";
import LoginArea from "../components/Dashboard/Login";
import { AuthContext } from "../contexts/AuthContext";
import * as db from '../providers/Posts-Provider';

export async function getServerSideProps() {
  const posts = await db.getAllPosts();
  
  const resMul = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/files/upload`);
  const multimidia = await resMul.json();

  return {
    props: {
      posts,
      multimidia
    },
  }
}

export default function Dashboard({ posts, multimidia }) {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user ?
        <LayoutDashboard
          posts={posts}
          user={user}
          multimidia={multimidia}
        />
        :
        <LoginArea />
      }
    </>
  )
}
