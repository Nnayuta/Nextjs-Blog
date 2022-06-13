import { PostModel } from "../../../models/posts.model";
import Header from "../Header";
import PostGallery from "../PostGallery";
import * as S from "./styled";

interface ILayoutMainProps {
    posts: PostModel[];
}

const LayoutMain: React.FC<ILayoutMainProps> = ({ posts }) => {
    return (
        <S.Container>
            <Header></Header>
            <PostGallery posts={posts}></PostGallery>
        </S.Container>
    );
}

export default LayoutMain;
