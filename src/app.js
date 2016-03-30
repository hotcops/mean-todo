'use strict';

// Requires express module
// Attaches instance of express to var 'app'
// Uses express.static to serve 'public' folder to default '/' route
var express = require('express');
var app = express();
var port = 3000
app.use('/', express.static('public'));

// Creates instance of express.Router on var 'router'
// Prefixes router with 'api' route
var router = express.Router();
app.use('/api', router);

// All routes added here are prefixed with '/api'
router.get('/todos', function(req, res) {
  res.json({todos:[]});
});

// TODO: add POST route to create new entries
// TODO: add PUT route to edit existing entries
// TODO: add DELETE route to delete entries

// Creates instance of node server running on var 'port'
app.listen(port, function() {
  console.log('mean-todo server is running on ' + port);
});
