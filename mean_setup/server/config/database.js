// Module dependencies
const mongoose = require('mongoose');
const dbConfig = require('./config').databaseConfig;
const connectionString = 'mongodb://' + dbConfig.host + '/' + dbConfig.database;

// Define the Mongoose configuration method
module.exports = function() {

  // Use Mongoose to connect to MongoDB
  // function open() {
  //   mongoose.connect(connectionString);
  //   mongoose.connection.on('open', () => {
  //     console.log('We have connected to mongodb');
  //   });
  // }

  const db = mongoose.connect(connectionString);

  // Load the 'User' model
  // require('../app/models/user.server.model');
  // require('../app/models/article.server.model');

  // Return the Mongoose connection instance
  return db;
};