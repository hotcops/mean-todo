'use strict';

// Create connection to our MongoDB
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(error){
  if(error) {
    console.log("Couldn't connect to MongoDB.")
  } else {
    console.log("Successfully connected to MongoDB.")
  }
});
