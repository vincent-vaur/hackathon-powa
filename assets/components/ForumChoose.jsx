import React from 'react';
import { Link } from 'react-router-dom';

export const ForumChoose = () => {
  return (
    <>
      <div>
        <h2>Collaborer avec les clients</h2>
        <Link to='/collaborationforum'>Cliquez ici</Link>
      </div>
      <div>
        <h2>Mettez vos compétences en lumière !</h2>
        <Link to='/proposalforum'>Cliquez ici</Link>
      </div>
    </>
  );
};
