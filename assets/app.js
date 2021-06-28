import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Users from './pages/Users';
import { CollaborationForum } from './pages/CollaborationForum';
import { ProposalForum } from './pages/ProposalForum';
import { Business } from './pages/categories/Business';
import { Data } from './pages/categories/Data';
import { DigitalMarketing } from './pages/categories/DigitalMarketing';
import { GraphicsDesign } from './pages/categories/GraphicsDesign';
import { Lifestyle } from './pages/categories/Lifestyle';
import { MusicAudio } from './pages/categories/MusicAudio';
import { ProgrammingTech } from './pages/categories/ProgrammingTech';
import { SocialMedia } from './pages/categories/SocialMedia';
import { VideoAnimation } from './pages/categories/VideoAnimation';
import { WritingTranslation } from './pages/categories/WritingTranslation';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/programming' exact component={ProgrammingTech} />
        <Route path='/users' exact component={Users} />
        <Route path='/business' exact component={Business} />
        <Route path='/data' exact component={Data} />
        <Route path='/digitalmarketing' exact component={DigitalMarketing} />
        <Route path='/graphicsdesign' exact component={GraphicsDesign} />
        <Route path='/lifestyle' exact component={Lifestyle} />
        <Route path='/MusicAudio' exact component={MusicAudio} />
        <Route path='/socialmedia' exact component={SocialMedia} />
        <Route path='/videoanimation' exact component={VideoAnimation} />
        <Route
          path='/writingtranslation'
          exact
          component={WritingTranslation}
        />
        <Route path='/proposalforum' exact component={ProposalForum} />
        <Route
          path='/collaborationforum'
          exact
          component={CollaborationForum}
        />
      </Switch>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
