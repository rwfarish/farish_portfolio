/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 * 
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import MyPage from 'views/MyPage';
import Main from 'layouts/Main';
import Head from 'next/head'; 

const IndexPage = () => {
  return (
    <div className="container">
      <Head><title>Bo Farish - Portfolio</title></Head>
      <Main>
        <MyPage />
      </Main>
    </div>
  )
};

export default IndexPage;
