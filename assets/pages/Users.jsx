import React, { useEffect, useState } from 'react';

export default (Users) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/user');
      const jsonData = await response.json();

      setUsers(jsonData);
      setLoading(false);
    };

    fetchUsers();
  });

  if (loading) {
    return <p>Chargement des utilisateurs ...</p>;
  }

  return (
    <>
      <h1>Users</h1>

      {users.map((user) => (
        <p>
          {user.firstname} {user.lastname}, {user.age}
        </p>
      ))}
    </>
  );
};
