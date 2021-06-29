import { Card, Container } from "react-bootstrap";
import React,{ useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostImg() {
  const linkRef = useRef(null);
  useDraggable(linkRef);
  return (
    <>
      <Card style={{ width: "180px", height: "auto" }} ref={linkRef}>
        <Container className="p-2">
          <Card.Text className="text-dark">
            <a href="https://www.fiverr.com/">Link to Fever ...</a>
          </Card.Text>
        </Container>
      </Card>
    </>
  );
}
