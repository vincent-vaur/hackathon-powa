import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

export default (Users) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId, setUserId } = useContext(UserContext);

  const fetchUsers = async () => {
    const response = await fetch("/api/user");
    const jsonData = await response.json();
    setUsers(jsonData);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Chargement des utilisateurs ...</p>;
  }

  return (
    <>
      <h1>Users</h1>

      <p>hello ! </p>

      <ul>
        {users.map((user) => (
          <li>
            {user.firstname} {user.lastname}, {user.age}
          </li>
        ))}
      </ul>
    </>
  );
};
