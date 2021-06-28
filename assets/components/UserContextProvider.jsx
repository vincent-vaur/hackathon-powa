import React,{ useState } from "react";
import UserContext from "../context/UserContext";

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
