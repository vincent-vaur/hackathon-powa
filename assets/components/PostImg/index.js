import { Card } from "react-bootstrap";
import React, { useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostImg() {
  const cardRef = useRef(null);
  useDraggable(cardRef);
  return (
    <>
      <Card style={{ width: "180px", height: "auto" }} ref={cardRef}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD2cpLq8vMuVFW8dnth18kLS0lwMX6jQZzA&usqp=CAU" />
        <Card.Body>
          <Card.Text className='text-dark'>
            Quick Description
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
