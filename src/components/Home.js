import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const message = useSelector((state) => state.activeTheme.message);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Home;
