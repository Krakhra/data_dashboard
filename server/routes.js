const express = require('express');
const path = require('path');

module.exports = async (app) => {
  // serve up all files in the 'build' directory statically
  // this provides a simple HTTP server
  app.use(express.static(path.resolve(__dirname, '../build')));

  // now attach all API routes (must be done after static build but before the index handler)
  // app.post(url, handler)...
  app.get('/api', (_req, res) => res.send({ text: 'Test API route' }));

  // catch all unknown routes and serve our index bundle to allow client-side routing
  // this must come after the above registrations so it does not override the static or API routes
  const index = path.resolve(__dirname, '../build/index.html');
  app.get('*', (_req, res) => res.sendFile(index));
};
