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

plainServer.listen(3000, function () {
  console.log('Listening on http://127.0.0.1:' + plainServer.address().port);
});

tlsServer.listen(3443, function () {
  console.log('Listening on https://localhost.daplie.com:' + tlsServer.address().port);
});

var postData = {
  'username': 'don1111',
  'password': 'nothacking',
  'provider': 'ptc'
};

requestify.post('http://127.0.0.1:3000/api/com.pokemon.go/login', postData)
.then(function(response) {
  // Get the response body
  var body = response.getBody();
  var access_token = body.access_token;
  console.log(access_token);
  requestify.request('http://127.0.0.1:3000/api/com.pokemon.go/nearby?latitude=40.36915523640919&longitude=-111.75098587678943&altitude=0step=10&offset=0', {
    method: 'GET',
    headers:{
       'Authorization' : `Bearer ${access_token}`
    }
  }).then(function(res){
    let body = res.getBody();
    console.log(body);
  });
});
