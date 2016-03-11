'use strict';

//enables express
var express = require('express');
var todos = require('../../mock/todos.json')

//map express.Router to 'router'
var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({todos: todos});
});

/*
TODO: add Post route to create new entries
TODO: add Put route to edit existing entries
TODO: add Delete route to delete entries
*/

module.exports = router;