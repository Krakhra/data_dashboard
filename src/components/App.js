import React, { useState, useEffect } from 'react';

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
      <code>{testVal}</code>
    </>
  );
};
export default App;
