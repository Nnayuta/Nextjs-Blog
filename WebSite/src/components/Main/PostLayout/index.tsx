import ButtonIcon from "../../Default/LinkIcon";
import Header from "../Header";
import * as S from "./styled";

const PostLayout = ({ children }) => {
    return (
        <S.Container>
            <Header></Header>
            <ButtonIcon href="/">home</ButtonIcon>
            {children}
        </S.Container>
    );
}

export default PostLayout;
