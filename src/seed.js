'use strict';

var Todo = require('./models/todo.js');

var todos = [
  'feed the dog',
  'walk the kids',
  'water the trees'
];

// if todo doesn't exist, create it.
todos.forEach(function(todo, index) {
  Todo.find({'name': todo}, function(err, todos) {
    if(!err && !todos.length) {
      Todo.create({completed: false, name: todo});
    };
  });
});
