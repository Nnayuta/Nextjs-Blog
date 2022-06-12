import React from "react";
import ButtonIcon from "../../Default/LinkIcon";
import Header from "../Header";
import * as S from "./styled";

interface IPostLayoutProps {
    children: React.ReactNode;
}

const PostLayout = ({ children }: IPostLayoutProps) => {
    return (
        <S.Container>
            <Header></Header>
            <ButtonIcon href="/">home</ButtonIcon>
            {children}
        </S.Container>
    );
}

export default PostLayout;
