import LoginArea from "../../components/Dashboard/Login";
import MenuDashboard from "../../components/Dashboard/Menu";
import * as S from "./styled";

const isLoggedIn = false;

export default function Dashboard() {
    return (
        <>
            {isLoggedIn ? <MenuDashboard /> : <S.LoginMenu> <LoginArea /> </S.LoginMenu>}
        </>
    )
}
