import React from 'react';
import LiteratureReivew from './literatureReview/LiteratureReview';
import QuestionTwo from './questionTwo/QuestionTwo';
import SidePanel from './sidePanel/SidePanel';
import Growth from './growth/Growth';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <div className="leftPanel">
      <SidePanel />
    </div>

    <div className="rightPanel">
      <Router>
        <Switch>
          <Route path="/literature" exact component={LiteratureReivew} />
          <Route path="/growth" exact component={Growth} />
          <Route path="/question-two" exact component={QuestionTwo} />
        </Switch>
      </Router>
    </div>
  </div>
);
export default App;
