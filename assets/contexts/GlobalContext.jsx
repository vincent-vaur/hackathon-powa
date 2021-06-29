import React,{ useState, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { postPostIt } from '../api/api';
import { postLogin } from '../api/api';

const GlobalContext = ({ children }) => {
  const [users, setusers] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  
  useEffect(() => {
    postPostIt().then((res) => setusers(res));
  },[]);
  
    useEffect(() => {
      postLogin().then((res) => setmovies(res));
      },[]);
  return (
    <UserContext.Provider
      value={{
        users,
        setusers,
        isConnected,
        setIsConnected,
        postPostIt,
        postLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );

};
export default GlobalContext;
