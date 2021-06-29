import React, { useState, useContext } from "react";
import "../../app.css";
import { Form, Button } from "react-bootstrap";
import Login from "../Login";
import Board from "../Board";
import Navigation from "../Navigation";
import logo from "../../img/fiverr.png";
import UserContext from "../../contexts/UserContext";

const LayoutBoard = () => {
  const initialList = [
    {
      id: "a",
      header: "Robin",
      text: "I'll be always here for you Batman",
      type: "PostIt",
    },
    {
      id: "b",
      // source: "https://www.youtube.com/1ZJTuep3w5g",
      text: "You know nothing John Snow",
      type: "video",
    },
    {
      id: "c",
      link: "https://react-bootstrap.github.io/",
      text: "A great link for you to check ...",
      type: "link",
    },
    {
      id: "d",
      img_source:
        "https://aws.vdkimg.com/film/6/9/9/3/6993_backdrop_scale_1280xauto.jpg",
      text: "Come Surfing Buddy",
      type: "image",
    },
  ];

  const { user } = useContext(UserContext);
  const [list, setList] = useState(initialList);
  const [postTitle, setPostTitle] = useState(" ");
  const [postText, setPostText] = useState(" ");
  const handleChangeTitle = (event) => {
    setPostTitle(event.target.value);
  };
  const handleChangeText = (event) => {
    setPostText(event.target.value);
  };
  const addArticle = () => {
    setList([
      ...list,
      {
        id: "z",
        header: postTitle,
        text: postText,
        type: "PostIt",
      },
    ]);
  };
  const handleSubmit = (event) => {
    addArticle();
    setPostTitle(" ");
    setPostText(" ");
    event.preventDefault();
  };

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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Post it header: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Post it topic"
              value={postTitle}
              onChange={handleChangeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={postText}
              onChange={handleChangeText}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add One postIt !
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LayoutBoard;
