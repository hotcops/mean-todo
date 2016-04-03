'use strict';

var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function($scope, $log, $interval, dataService){

  $scope.seconds = 0;

  $scope.counter = function() {
    $scope.seconds++;
    $log.log($scope.seconds + 'seconds have passed!');
  };

  //1st param = provide a function, 2nd param = time in ms between executions, 3rd param = # times to execute (0=repeat infinitely)
  $interval($scope.counter, 1000, 10)

  dataService.getTodos(function(response){
    var todos = response.data.todos;
    $scope.todos =  todos;
    });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };

})
