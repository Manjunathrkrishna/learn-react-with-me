import React from 'react';
import ProfileCardFunc from '../components/ProfileCardFunc';
import ProfileCardClass from '../components/ProfileCardClass';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to React Day 2</h2>
      <ProfileCardFunc />
      <ProfileCardClass />
    </div>
  );
}

export default Home;
// NOT USING THIS PAGE FOR NOW