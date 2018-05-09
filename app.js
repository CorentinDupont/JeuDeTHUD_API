// app.js
var express = require('express');
var app = express();
var db = require('./db');

var ShotController = require('./shots/ShotController');
app.use('/shots', ShotController);

var GameController = require('./games/GameController');
app.use('/games', GameController);

module.exports = app;