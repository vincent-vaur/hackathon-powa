import { Card } from "react-bootstrap";
import React, { useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostIt(props) {
  const postRef = useRef(null);
  useDraggable(postRef);
  return (
    <>
            <Card
              style={{ width: "180px", height: "auto" }}
              className="bg-warning m-1"
              ref={postRef}
            >
              <Card.Header as="h5" className='text-dark'>{props.header}</Card.Header>
              <Card.Body>
                <Card.Text className='text-dark'>
                  {props.text}
                </Card.Text>
              </Card.Body>
            </Card>
    </>
  );
}