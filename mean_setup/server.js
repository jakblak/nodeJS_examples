/**
 * Entry point to Node server
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const initDatabase = require('./server/config/database');
const configureExpress = require('./server/config/express');
// const configurePassport = require('.server/config/passport');
const port = 3000;

// Open DB and create a new Mongoose connection instance
const db = initDatabase();

// Create a new Express application instance
const app = configureExpress(db);

// Configure the Passport middleware
// const passport = configurePassport();

// Use the Express application instance to listen to the '3000' port
app.listen(port, (err) => {
    console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
});

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;