// app.js
var express = require('express');
var app = express();
var db = require('./db');

var ActionController = require('./actions/ActionController');
app.use('/actions', ActionController);

module.exports = app;