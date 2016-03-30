'use strict';

var angular = require('angular');

angular.module('todoListApp', []);

// Uses Webpack to load these scripts into 'public/scripts/todo.bundle.js'
require('./scripts/controllers/main.js');
require('./scripts/controllers/todo.js');
require('./scripts/directives/todo.js');
require('./scripts/services/data.js');
