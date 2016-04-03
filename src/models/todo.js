'use strict';

var mongoose = require('mongoose');

// Our 'todos' need to take into account 'todo.name' and 'todo.completed'

// Creates new Mongoose Schema
var todoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

// Creates 'Todo' schema model using the 'todoSchema' var
var model = mongoose.model('Todo', todoSchema);

// Exports model 
module.exports = model;
