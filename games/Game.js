// Game.js
var mongoose = require('mongoose');  
var GameSchema = new mongoose.Schema({ 
    starter: String,
    listener: String,
    id_game: Number
});
mongoose.model('Game', ShotSchema);

module.exports = mongoose.model('Game');