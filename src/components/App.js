import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import LiteratureReivew from './literatureReview/LiteratureReview';
import QuestionTwo from './questionTwo/QuestionTwo';
import QuestionFour from './questionFour/QuestionFour';
import SidePanel from './sidePanel/SidePanel';
import Growth from './growth/Growth';
import Methods from './methods/Methods';
import './App.css';

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
          <Route path="/methods" exact component={Methods}/>
          <Route path="/question-four" exact component={QuestionFour} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </div>
);
export default App;
