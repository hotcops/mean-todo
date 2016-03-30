'use strict';

var angular = require('angular');

angular.module('todoListApp')
.service('dataService', function($http) {
  this.getTodos = function(cb) {
    // Looks in route set up in express router in 'src/api/index.js'
    $http.get('/api/todos').then(cb);
  };

  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };

  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
  };

});
