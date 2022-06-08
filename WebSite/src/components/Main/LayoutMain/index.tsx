import Header from "../Header";
import PostGallery from "../PostGallery";
import * as S from "./styled";

const LayoutMain = ({ posts }) => {
    return (
        <S.Container>
            <Header></Header>
            <PostGallery posts={posts}></PostGallery>
        </S.Container>
    );
}

export default LayoutMain;
