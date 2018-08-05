import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the VERY VERY BEST home component</div>
      <button onClick={() => console.log('baddup')}> press me </button>
    </div>
  );
};

export default {
  component: Home
};
