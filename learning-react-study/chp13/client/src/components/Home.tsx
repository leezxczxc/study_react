import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>홈, 그 페이지는 가장 먼저 보여지는 페이지.</p>
    </div>
  );
};

export default Home;
