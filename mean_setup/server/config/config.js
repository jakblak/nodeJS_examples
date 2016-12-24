// Load the correct configuration file according to the 'NODE_ENV' variable
'use strict';

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

const env = process.env.NODE_ENV;

console.log(`Node environment: ${env}`);
console.log(`loading config.${env}.json`);

module.exports = require(`./env/${env}.json`);