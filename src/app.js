'use strict';

// Requires express module
// Attaches instance of express to var 'app'
// Uses express.static to serve 'public' folder to default '/' route
var express = require('express');
var app = express();
var port = 3000
app.use('/', express.static('public'));

// Sends routes to Router hosted in 'src/api' where 'index.js' will handle them
// Prefixes routes with '/api'
var router = require('./api');
app.use('/api', router);


// Creates instance of node server running on var 'port'
app.listen(port, function() {
  console.log('mean-todo server is running on ' + port);
});
