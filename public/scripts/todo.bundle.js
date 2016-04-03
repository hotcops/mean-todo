webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);

	// Uses Webpack to load these scripts into 'public/scripts/todo.bundle.js'
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.controller('todoCtrl', function($scope, dataService) {
	  $scope.deleteTodo = function(todo, index) {
	    $scope.todos.splice(index, 1);
	    dataService.deleteTodo(todo);
	  };

	  $scope.saveTodos = function() {
	    var filteredTodos = $scope.todos.filter(function(todo){
	      if(todo.edited) {
	        return todo
	      };
	    })
	    dataService.saveTodos(filteredTodos)
	    .finally($scope.resetTodoState());
	  };

	  $scope.resetTodoState = function() {
	    $scope.todos.forEach(function(todo) {
	      todo.edited = false;
	    });
	  };
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.directive('todo', function(){
	  return {
	    templateUrl: 'templates/todo.html',
	    replace: true,
	    controller: 'todoCtrl'
	  }
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.service('dataService', function($http, $q) {
	  this.getTodos = function(cb) {
	    // Looks in route set up in express router in 'src/api/index.js'
	    $http.get('/api/todos').then(cb);
	  };

	  this.deleteTodo = function(todo) {
	    console.log("I deleted the " + todo.name + " todo!");
	  };

	  this.saveTodos = function(todos) {
	    var queue = [];
	    todos.forEach(function(todo) {
	      var request;
	      if(!todo._id) {
	        request = $http.post('/api/todos', todo)
	      } else {
	        request = $http.put('/api/todos/' + todo._id, todo).then(function(result) {
	          todo = result.data.todo;
	          return todo;
	        })
	      };
	      queue.push(request);
	    });
	    return $q.all(queue).then(function(results) {
	      console.log('I saved ' + todos.length +" todos!");
	    });
	  };

	});


/***/ }
]);