import Header from "../Header";
import PostGallery from "../PostGallery";
import * as S from "./styled";


const LayoutMain: React.FC = () => {
    return (
        <S.MainContainer>
            <S.Container>
                <Header></Header>
                <PostGallery />
            </S.Container>
        </S.MainContainer>
    );
}

export default LayoutMain;
