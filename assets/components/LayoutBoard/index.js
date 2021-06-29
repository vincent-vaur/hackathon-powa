import React, { useContext } from "react";
import "../../app.css";
import Login from "../Login";
import Board from "../Board";
import Navigation from "../Navigation";
import logo from "../../img/fiverr.png";
import UserContext from "../../contexts/UserContext";


const LayoutBoard = () => {
  const {list, user} = useContext(UserContext);
  
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='Login d-flex align-items-end flex-column mr-3'>
        {user ? (
          <>
            <p>{user.email}</p>
            <a href='/api/logout'>Déconnexion</a>
          </>
        ) : (
          <Login />
        )}
      </div>
      <div className='App'>
        <Navigation />
        <Board list={list} />
      </div>
    </>
  );
};

export default LayoutBoard;
