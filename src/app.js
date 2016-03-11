'use strict';

//enables express
var express = require('express');

//map router to 'api module' 
var router = require('./api');

//map express to 'app'
var app = express();


//serves 'public' dir at base '.com/' route
app.use('/', express.static('public'));


//uses router to append '/api' namespace to route
app.use('/api', router);


//launches node server w/ confirmation msg
app.listen(3000, function() {
  console.log('The frontend server is running on port 3000.');
});