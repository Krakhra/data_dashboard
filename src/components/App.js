import React from 'react';
import Home from './home/Home';
import LiteratureReivew from './literatureReview/LiteratureReview';
import QuestionTwo from './questionTwo/QuestionTwo';
import SidePanel from './sidePanel/SidePanel';
import Growth from './growth/Growth';
import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => (
  <div id="app">
    <Router>
      <div className="left-panel">
        <SidePanel />
      </div>

      <div className="right-panel">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/literature" exact component={LiteratureReivew} />
          <Route path="/growth" exact component={Growth} />
          <Route path="/question-two" exact component={QuestionTwo} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </div>
);
export default App;
