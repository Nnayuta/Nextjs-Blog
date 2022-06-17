import { useContext } from "react";
import LayoutDashboard from "../components/Dashboard/LayoutDashboard";
import LoginArea from "../components/Dashboard/Login";
import * as db from '../providers/Posts-Provider'
import { AuthContext } from "../contexts/AuthContext";

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

export async function getServerSideProps() {
  const posts = await db.getAllPosts();
  
  const resMul = await fetch('http://localhost:3000/api/files/upload');
  const multimidia = await resMul.json();

  return {
    props: {
      posts,
      multimidia
    },
  }
}