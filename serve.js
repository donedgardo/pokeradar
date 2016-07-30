'use strict';

var querystring = require('querystring');
var http = require('http');
var https = require('https');
var certs = require('localhost.daplie.com-certificates');
var express = require('express');
var app = express();
var pokeapp = require('./');
var plainServer = http.createServer(app);
var tlsServer = https.createServer(certs, app);

var requestify = require('requestify');

app.use('/', pokeapp);
app.use('/static', express.static('./public/static'));
app.use('/', express.static('./public/static'));

plainServer.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://127.0.0.1:' + plainServer.address().port);
});

tlsServer.listen(3443, function () {
  console.log('Listening on https://localhost.daplie.com:' + tlsServer.address().port);
});
