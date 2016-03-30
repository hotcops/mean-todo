'use strict';

var express = require('express');
// Binds 'mock/todos.json' object to var 'todos'
var todos = require('../../mock/todos.json');

// Creates instance of express.Router on var 'router'
var router = express.Router();

// All routes added here are prefixed with '/api'
router.get('/todos', function(req, res) {
  //uses var 'todos' binded above
  res.json({todos: todos});
});

// TODO: add POST route to create new entries
// TODO: add PUT route to edit existing entries
// TODO: add DELETE route to delete entries

// Exports 'router' so it can be used in 'src/app.js'
module.exports = router;
