import React, { Component } from 'react';

class ProfileCardClass extends Component {
  render() {
    return (
      <div style={styles.card}>
        <h3>👤 Name: Manjunath</h3>
        <p>💼 Role: Full Stack Developer</p>
      </div>
    );
  }
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    background: '#f7f7f7',
    margin: '1rem'
  }
};

export default ProfileCardClass;
