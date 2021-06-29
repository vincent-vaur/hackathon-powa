import { Card, Container } from "react-bootstrap";
import React,{ useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostImg(props) {
  const linkRef = useRef(null);
  useDraggable(linkRef);
  return (
    <>
      <Card style={{ width: "auto", height: "auto" }} ref={linkRef} className='m-3'> 
        <Container className="p-2">
          <Card.Text className="text-dark">
            <a href={ props.link || "https://www.fiverr.com/"}>{props.text || 'Link to Fever ...'}</a>
          </Card.Text>
        </Container>
      </Card>
    </>
  );
}
