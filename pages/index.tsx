import type { NextPage }  from 'next';
import React              from 'react';
import { Main }           from '../components/Pages/Main/Main';
import Layout             from '../Layout/Layout';

const Home: NextPage = () => {
  return (
      <Layout>
        <Main/>
      </Layout>
  );
};

export default Home;
