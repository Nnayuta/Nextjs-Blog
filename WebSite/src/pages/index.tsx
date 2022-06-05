import Header from '../components/Main/Header'
import PostGallery from '../components/Main/PostGallery'

import * as S from './styled'

export default function Home() {
  return (
    <S.Container>
      <Header></Header>
      <PostGallery></PostGallery>
    </S.Container>
  )
}
