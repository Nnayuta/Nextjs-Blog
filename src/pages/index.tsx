import React from 'react';

import { HeadSEO } from '../components/Default/Head';
import { LayoutMain } from '../components/Main/LayoutMain';

const Home: React.FC = () => {

  return (
    <>
      <HeadSEO title="Home" url={'/'} />
      <LayoutMain />
    </>
  );
}

export default Home;