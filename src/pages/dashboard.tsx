import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { LayoutDashboard } from "../components/Dashboard/LayoutDashboard";
import { LoginArea } from "../components/Dashboard/Login";

export default function Dashboard() {

  const { user } = useContext(AuthContext);

  return (
    <>
      {user ? <LayoutDashboard user={user} /> : <LoginArea />}
    </>
  )
}
