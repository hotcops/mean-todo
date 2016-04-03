'use strict';

var express = require('express');
// Capitalized 'Todo' by convention when reffering to models
var Todo = require('../models/todo');
// Binds 'mock/todos.json' object to var 'todos'
// var todos = require('../../mock/todos.json');

// Creates instance of express.Router on var 'router'
var router = express.Router();

// All routes added here are prefixed with '/api'
router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos) {
    if(err) {
      // do something
      return res.status(500).json({message: err.message});
    }
    res.json({todos: todos});
  });
});

// adds POST route to create new entries
router.post('/todos', function(req, res) {
  var todo = req.body;
  Todo.create(todo, function(err, todo) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Created'});
  })
});

// adds PUT route to edit existing entries
router.put('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if(todo && todo._id !== id) {
    return res.status(500).json({err: "Ids don't match!"})
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'todo': todo, message: 'Todo Updated'});
  })
});


// TODO: add DELETE route to delete entries

// Exports 'router' so it can be used in 'src/app.js'
module.exports = router;
