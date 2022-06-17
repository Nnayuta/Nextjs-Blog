import Header from "../Header";
import PostGallery from "../PostGallery";
import * as S from "./styled";

import { PostModel } from "../../../models/PostModel";

interface ILayoutMainProps {
    posts: PostModel[];
}

const LayoutMain: React.FC<ILayoutMainProps> = ({ posts }) => {
    return (
        <S.MainContainer>
            <S.Container>
                <Header></Header>
                <PostGallery posts={posts}></PostGallery>
            </S.Container>
        </S.MainContainer>
    );
}

export default LayoutMain;
