import React from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';


const Home = () => {
  const message = useSelector((state) => state.activeTheme.message);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <p>{message}</p>
    </div>
  );
};

export default Home;
