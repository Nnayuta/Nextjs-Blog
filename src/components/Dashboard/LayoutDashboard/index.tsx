import React, { useState } from "react";
import * as S from './styled';

import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { CreatePost } from "../CreatePost";
import { SidebarArtigo } from "../SidebarArtigo";
import { SideBarConfig } from "../SidebarConfig";
import { SidebarMultimidia } from "../SidebarMultimidia";
import { SidebarPainel } from "../SidebarPainel";

import { UserModel } from "../../../models/UserModel";


interface ILayoutDashboardProps {
    user: UserModel;
}

export const LayoutDashboard: React.FC<ILayoutDashboardProps> = ({ user }) => {

    const [sideBarActive, setSideBarActive] = useState(0);

    const OnClick = (index) => {
        setSideBarActive(index);
    }


    const PainelGeral = () => {
        return (
            <S.Container>
                <SideBar active={sideBarActive} onClick={OnClick} />
                <S.Content>
                    {sideBarActive === 0 && <SidebarPainel />}
                    {sideBarActive === 1 && <SidebarArtigo />}
                    {sideBarActive === 2 && <SidebarMultimidia />}
                    {sideBarActive === 3 && <SideBarConfig user={user} />}
                </S.Content>
            </S.Container>
        )
    }
    /// =================================================== \\\

    const [activeHeader, setActiveHeader] = useState(0);

    const createPostOnClick = (index: number) => {
        setActiveHeader(index);
    }

    return (
        <>
            <Header activeHeader={activeHeader} createPostOnClick={createPostOnClick} />
            {activeHeader === 0 && <PainelGeral />}
            {activeHeader === 1 && <CreatePost />}
        </>
    );
}
