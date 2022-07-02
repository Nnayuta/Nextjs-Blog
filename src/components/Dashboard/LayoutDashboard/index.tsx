import React, { useEffect, useState } from "react";
import * as S from './styled';

import { Header } from "../Header";
import { SideBar } from "../Sidebar";
import { CreatePost } from "../CreatePost";
import { SidebarArtigo } from "../SidebarArtigo";
import { SideBarConfig } from "../SidebarConfig";
import { SidebarMultimidia } from "../SidebarMultimidia";
import { SidebarPainel } from "../SidebarPainel";

import { UserModel } from "../../../models/UserModel";
import { HeadSEO } from "../../Default/Head";
import { parseCookies, setCookie } from "nookies";


interface ILayoutDashboardProps {
    user: UserModel;
}

export const LayoutDashboard: React.FC<ILayoutDashboardProps> = ({ user }) => {

    const [activeHeader, setActiveHeader] = useState(0);
    const [sideBarActive, setSideBarActive] = useState(0);

    useEffect(() => {
        const { 'sideBarActive': sideID } = parseCookies();
        const { 'activeHeader': headID } = parseCookies();

        if (sideID) {
            setSideBarActive(Number(sideID))
        }

        if(headID){
            setActiveHeader(Number(headID))
        }

    }, [])

    const OnClick = (index: number) => {
        setCookie(null, 'sideBarActive', index.toString(), {
            maxAge: 30,
            path: '/dashboard'
        })

        setSideBarActive(index);
    }

    const createPostOnClick = (index: number) => {

        setCookie(null, 'activeHeader', index.toString(), {
            maxAge: 30,
            path: '/dashboard'
        })

        setActiveHeader(index);
    }

    const PainelGeral = () => {
        return (
            <S.MainContainer>
                <SideBar active={sideBarActive} onClick={OnClick} />
                <S.Content>
                    {sideBarActive === 0 && <SidebarPainel />}
                    {sideBarActive === 1 && <SidebarArtigo />}
                    {sideBarActive === 2 && <SidebarMultimidia />}
                    {sideBarActive === 3 && <SideBarConfig user={user} />}
                </S.Content>
            </S.MainContainer>
        )
    }

    return (
        <S.Layout>
            <HeadSEO title={`Dashboard`} url={'/dashboard'} />
            <Header activeHeader={activeHeader} createPostOnClick={createPostOnClick} />
            {activeHeader === 0 && <PainelGeral />}
            {activeHeader === 1 && <CreatePost />}
        </S.Layout>
    );
}
