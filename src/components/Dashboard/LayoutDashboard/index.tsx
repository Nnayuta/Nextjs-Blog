import React, { useState } from "react";
import Header from "../Header";
import SideBar from "../Sidebar";
import * as S from './styled';

import CreatePost from "../CreatePost";
import SidebarArtigo from "../SidebarArtigo";
import SideBarConfig from "../SidebarConfig";
import SidebarMultimidia from "../SidebarMultimidia";
import SidebarPainel from "../SidebarPainel";

import { PostModel } from "../../../models/PostModel";
import { UserModel } from "../../../models/UserModel";
import { MultimidiaModel } from "../../../models/MultimidiaModel";


interface ILayoutDashboardProps {
    posts: PostModel[];
    user: UserModel;
    multimidia: MultimidiaModel[];
}

const LayoutDashboard: React.FC<ILayoutDashboardProps> = ({ posts, user, multimidia }) => {

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
                    {sideBarActive === 2 && <SidebarMultimidia multimidia={multimidia} />}
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
            {createPost ? PainelGeral() : <CreatePost />}
        </>
    );
}

export default LayoutDashboard;
