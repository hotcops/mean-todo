'use strict';

// Requires express module
// Attaches instance of express to var 'app'
var express = require('express');
var app = express();
var port = 3000

// Requires body-parser
var parser = require('body-parser');

// Requires database
require('./database');

require('./seed');

// Uses express.static to serve 'public' folder to default '/' route
app.use('/', express.static('public'));
app.use(parser.json());

// Sends routes to Router hosted in 'src/api' where 'index.js' will handle them
// Prefixes routes with '/api'
var router = require('./api');
app.use('/api', router);


// Creates instance of node server running on var 'port'
app.listen(port, function() {
  console.log('mean-todo server is running on ' + port);
});
