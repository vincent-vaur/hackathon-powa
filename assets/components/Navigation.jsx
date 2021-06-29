import React from 'react';
import { Nav } from 'react-bootstrap';
import CreatePostVideo from './CreatePostVideo';
import CreatePostIt from './CreatePostIt';
import CreatePostImg from './CreatePostImg ';
import CreateLink from './CreateLink';
const Navigation = () => {
  return (
    <div className='dashboard'>
      <Nav defaultActiveKey='/home' className='flex-xl-column'>
        <CreatePostIt />
        <CreatePostImg />
        <CreateLink />
        <CreatePostVideo />
      </Nav>
    </div>
  );
};

export default Navigation;
