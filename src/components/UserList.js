import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // to show loading state
  const [error, setError] = useState(null);      // to catch any error

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency = run only once

  if (loading) return <p>🔄 Loading users...</p>;
  if (error) return <p style={{ color: 'red' }}>❌ {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h4>👥 Users List (from API)</h4>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
