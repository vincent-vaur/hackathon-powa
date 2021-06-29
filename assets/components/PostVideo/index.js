import { Card } from "react-bootstrap";
import 'video-react/dist/video-react.css'; 
import { Player } from 'video-react';
import React,{ useRef } from "react";
import useDraggable from "../../hooks/useDraggable";

export default function PostImg(props) {
  const videoRef = useRef(null);
  useDraggable(videoRef);
  return (
    <>
      <Card style={{ width: "230px", height: "auto" }} ref={videoRef} className='m-3'>
          <Player
            playsInline
            src={ props.source || 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'}
          />
        <Card.Body>
          <Card.Text className="text-secondary">
            { props.text || 'Some quick example.'}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
