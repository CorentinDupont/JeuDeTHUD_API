// Shot.js
var mongoose = require('mongoose');  
var ShotSchema = new mongoose.Schema({ 
    pawn : String,
    slot_1: String,
    slot_2: String,
    shot_eat : [String],
    id_game : String,
    id_shot : Number,
    surrender : Boolean
});

ShotSchema.set('toObject', {
    transform: function (doc, ret) {
      delete ret._id
      delete ret.__v
    }
  });
mongoose.model('Shot', ShotSchema);

module.exports = mongoose.model('Shot');