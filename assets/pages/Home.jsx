import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [changePage, setChangePage] = useState('');
  return (
    <>
      <h1>Quelle catégorie souhaitez-vous voir ?</h1>
      <nav>
        <ul>
          <li>
            <Link to='business'>Business</Link>
          </li>
          <li>
            <Link to='data'>Data</Link>
          </li>
          <li>
            <Link to='digitalMarketing'>Digital Marketing</Link>
          </li>
          <li>
            <Link to='graphicsdesign'>Graphics and Design</Link>
          </li>
          <li>
            <Link to='lifestyle'>Lifestyle</Link>
          </li>
          <li>
            <Link to='musicaudio'>Music and Audio</Link>
          </li>
          <li>
            <Link to='programming'>Programming and Tech</Link>
          </li>
          <li>
            <Link to='socialmedia'>Social Media</Link>
          </li>
          <li>
            <Link to='videoanimation'>Video and Animation</Link>
          </li>
          <li>
            <Link to='writingtranslation'>Writing and Translation</Link>
          </li>
        </ul>
      </nav>
      <p>
        Si vous avez déjà un compte, <Link to='/users'>Cliquez-ici</Link>
      </p>
    </>
  );
};
