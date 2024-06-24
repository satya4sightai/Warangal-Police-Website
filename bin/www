#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('warangal-police-website:server');
var https = require('https');
var http = require('http');
var fs = require('fs');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '4444');
// var port = normalizePort(process.env.PORT || '443');
app.set('port', port);

var options = {
  key: fs.readFileSync('ssl_keys/privkey.pem'),
  cert: fs.readFileSync('ssl_keys/cert.pem'),
  ca: fs.readFileSync('ssl_keys/chain.pem')
};

/**
 * Create HTTP server.
 */

var http_server = http.createServer(app);
var https_server = https.createServer(options, app);

/**
 * Listen on provided port, on all network interfaces.
 */
http_server.listen(port);
// http_server.listen(80);
http_server.on('error', onError);
http_server.on('listening', onListening);

https_server.listen(443);
https_server.on('error', onError);
https_server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = http_server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log("Listening on " + bind);
}

function onSecureListening() {
  var addr = https_server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
