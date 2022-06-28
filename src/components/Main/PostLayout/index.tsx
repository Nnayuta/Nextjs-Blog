import React from "react";
import { LinkIcon } from "../../Default/LinkIcon";
import { Header } from "../Header";
import * as S from "./styled";

interface IPostLayoutProps {
    children: React.ReactNode;
}

export const PostLayout: React.FC<IPostLayoutProps> = ({ children }) => {
    return (
        <S.Container>
            <Header></Header>
            <LinkIcon href="/">home</LinkIcon>
            {children}
        </S.Container>
    );
}