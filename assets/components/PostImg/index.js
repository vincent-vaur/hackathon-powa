import { Card } from "react-bootstrap";
import React, { useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostImg(props) {
  const cardRef = useRef(null);
  useDraggable(cardRef);
  return (
    <>
      <Card style={{ width: "180px", height: "auto" }} ref={cardRef} className='m-3'>
        <Card.Img variant="top" src={ props.img_source || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD2cpLq8vMuVFW8dnth18kLS0lwMX6jQZzA&usqp=CAU"} />
        <Card.Body>
          <Card.Text className='text-dark'>
            {props.text || 'Quick Description'}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
