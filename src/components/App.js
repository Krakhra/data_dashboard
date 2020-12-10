import React, { useState, useEffect } from 'react';
import LiteratureReivew from './literatureReview/LiteratureReview';
import SidePanel from './sidePanel/SidePanel';
import Growth from './growth/Growth';
import Methods from './methods/Methods';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [testVal, setTestVal] = useState('');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((text) => setTestVal(text))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className = "App">
      <div className = "leftPanel">
        <SidePanel/>
      </div>
  
      <div className = "rightPanel">
        <Router>
          <Switch>
            <Route path = "/literature" exact component={LiteratureReivew}/>
            <Route path = "/growth" exact component={Growth}/>
            <Route path = "/methods" exact component={Methods}/>
          </Switch>
        </Router>
      </div>
      
    </div>
  );
};
export default App;
