import { Card } from "react-bootstrap";
import React, { useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostIt() {
  const postRef = useRef(null);
  useDraggable(postRef);
  return (
    <>
            <Card
              style={{ width: "180px", height: "auto" }}
              className="bg-warning"
              ref={postRef}
            >
              <Card.Header as="h5" className='text-dark'>Post-it</Card.Header>
              <Card.Body>
                <Card.Text className='text-dark'>
                  This an example of the text i want to put in my post it.
                </Card.Text>
              </Card.Body>
            </Card>
    </>
  );
}