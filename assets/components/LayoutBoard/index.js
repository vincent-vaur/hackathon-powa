import React, { useContext } from "react";
import "../../app.css";
import UserContext from "../../contexts/UserContext";
import Login from "../Login";
import Board from "../Board";
import Navigation from "../Navigation";
import logo from "../../img/fiverr.png";
import UserContext from "../../contexts/UserContext";


const LayoutBoard = () => {
  const {list} = useContext(UserContext);
  
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Login">
        {user ? (
          <>
            <p>{ user.email }</p>
            <a href="/api/logout">Déconnexion</a>
          </>
        ) : (
          <Login />
        )}
      </div>
      ;
      <div className="App">
        <Navigation />
        <Board list={list} />
      </div>
    </>
  );
};

export default LayoutBoard;
