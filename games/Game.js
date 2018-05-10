// Game.js
var mongoose = require('mongoose');  
var GameSchema = new mongoose.Schema({ 
    starter : String,
    listener : String,
    id_game : Number
});
GameSchema.set('toObject', {
    transform: function (doc, ret) {
      ret.id_game = ret._id
      delete ret._id
      delete ret.__v
    }
  });
mongoose.model('Game', GameSchema);

module.exports = mongoose.model('Game');