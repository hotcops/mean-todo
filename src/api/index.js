'use strict';

//enables express
var express = require('express');

//map express.Router to 'router'
var router = express.Router();

router.get('/todos', function(req, res) {
  res.json({todos:[]});
});

/*
TODO: add Post route to create new entries
TODO: add Put route to edit existing entries
TODO: add Delete route to delete entries
*/

module.exports = router;