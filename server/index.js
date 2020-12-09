const config = require('../config');

// handle errors gracefully
const errorHandler = (err) => console.error('Uncaught error', err);
process.on('unhandledRejection', errorHandler);
process.on('uncaughtException', errorHandler);

(async () => {
  // create a new express app
  const app = require('express')();

  // register middleware for app
  app.use(require('morgan')(config.logFormat));
  app.use(require('body-parser').json());
  app.use(require('body-parser').urlencoded({ extended: true }));

  // register routes for app
  await require('./routes')(app); // need to register routes after any others to allow the catchall index route to function

  // determine port and start the server
  app.listen(config.port, () =>
    console.log(`
    Data dashboard is now running on port ${config.port}!
    Mode: ${config.isDev ? 'development' : 'production'}
    `)
  );
})()
  .then(() => console.log('Server setup complete!'))
  .catch((err) => console.error('Encountered a fatal error during setup!\n', err));
