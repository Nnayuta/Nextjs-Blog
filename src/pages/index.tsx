import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'
import Loading from '../components/Default/Loading'

const HeadSEO = dynamic(() => import('../components/Default/Head'), {
  suspense: true,
})

const LayoutMain = dynamic(() => import('../components/Main/LayoutMain'), {
  suspense: true,
})

const Home: React.FC = () => {

  return (
    <Suspense fallback={<Loading />}>
      <HeadSEO title="Home" url={'/'} />
      <LayoutMain />
    </Suspense>
  );
}

export default Home;