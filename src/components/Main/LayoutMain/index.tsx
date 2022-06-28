import { Header } from "../Header";
import { PostGallery } from "../PostGallery";
import * as S from "./styled";


export const LayoutMain: React.FC = () => {
    return (
        <S.MainContainer>
            <S.Container>
                <Header />
                <PostGallery />
            </S.Container>
        </S.MainContainer>
    );
}