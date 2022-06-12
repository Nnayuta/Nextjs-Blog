import { useState } from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import * as S from './styled';

import SidebarArtigo from "../SidebarArtigo";
import SidebarMultimidia from "../SidebarMultimidia";
import SidebarPainel from "../SidebarPainel";
import SideBarConfig from "../SidebarConfig";

const LayoutDashboard = ({ posts, user }) => {

    const [sideBarActive, setSideBarActive] = useState(0);
    const OnClick = (index) => {
        setSideBarActive(index);
    }

    const [createPost, setCreatePost] = useState(true);

    const PainelGeral = () => {
        return (
            <S.Container>
                <SideBar active={sideBarActive} onClick={OnClick} />
                <S.Content>
                    {sideBarActive === 0 && <SidebarPainel />}
                    {sideBarActive === 1 && <SidebarArtigo posts={posts} />}
                    {sideBarActive === 2 && <SidebarMultimidia />}
                    {sideBarActive === 3 && <SideBarConfig user={user} />}
                </S.Content>
            </S.Container>
        )
    }

    const createPostOnClick = () => {
        setCreatePost(!createPost);
    }

    return (
        <>
            <Header createPostOnClick={createPostOnClick} />
            {createPost ? PainelGeral() : 'a' }
        </>
    );
}

export default LayoutDashboard;
