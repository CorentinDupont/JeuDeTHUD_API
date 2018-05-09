// app.js
var express = require('express');
var app = express();
var db = require('./db');

var ShotController = require('./shots/ShotController');
app.use('/shots', ShotController);

module.exports = app;