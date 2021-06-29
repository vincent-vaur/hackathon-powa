import React from 'react';
import { Nav } from 'react-bootstrap';
import link from '../img/link.svg';
import picture from '../img/picture.svg';
import postit from '../img/post-it.svg';
import video from '../img/video.svg'
const Navigation = () => {
  return (
    <div className='dashboard'>
      <Nav defaultActiveKey='/home' className='flex-xl-column'>
        <Nav.Link href='/home' className='mb-5'>
          <img className='w-100' src={postit} alt='postit' />
        </Nav.Link>
        <Nav.Link eventKey='link-1' className='mt-5 mb-5'>
          <img className='w-100' src={picture} alt='immages' />
        </Nav.Link>
        <Nav.Link eventKey='link-2' className='mt-5 mb-5'>
          <img className='w-100' src={link} alt='link' />
        </Nav.Link>
        <Nav.Link eventKey='link-2' className='mt-5'>
          <img className='w-100' src={video} alt='video' />
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Navigation;
