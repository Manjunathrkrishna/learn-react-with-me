import React from 'react';

function ProfileCardFunc() {
  return (
    <div style={styles.card}>
      <h3>👤 Name: Manjunath</h3>
      <p>💼 Role: Full Stack Developer</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    background: '#f0f0f0',
    margin: '1rem'
  }
};

export default ProfileCardFunc;
