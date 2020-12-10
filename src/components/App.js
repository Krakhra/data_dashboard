import React, { useState, useEffect } from 'react';
import LiteratureReivew from './literatureReview/LiteratureReview';
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
    <>
      <h1>CIS4020: Data Dashboard</h1>
      <p>Hello, World!</p>
      <a href="/literature">temp link to literature Reviews</a>
      <Router>
        <Switch>
          <Route path = "/literature" exact component={LiteratureReivew}/>
        </Switch>
      </Router>
      <code>{testVal}</code>
    </>
  );
};
export default App;
