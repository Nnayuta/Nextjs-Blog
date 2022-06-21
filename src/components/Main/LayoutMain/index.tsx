import Header from "../Header";
import PostGallery from "../PostGallery";
import * as S from "./styled";

import useSWR from "swr";
import { PostModel } from "../../../models/PostModel";

const LayoutMain: React.FC = () => {

    const { data: posts } = useSWR<PostModel[]>('/api/posts');

    return (
        <S.MainContainer>
            <S.Container>
                <Header></Header>
                {posts ? <PostGallery posts={posts} /> : 'Loading'}
            </S.Container>
        </S.MainContainer>
    );
}

export default LayoutMain;
