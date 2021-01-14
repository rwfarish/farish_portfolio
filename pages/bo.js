import React from 'react';
import MyPage from 'views/MyPage';
import Main from 'layouts/Main';

const BoPage = () => {
  return (
    <div className="container">
      <Main>
        <MyPage />
      </Main>
    </div>
  )
};

export default BoPage;