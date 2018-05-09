// Shot.js
var mongoose = require('mongoose');  
var ShotSchema = new mongoose.Schema({ 
    pawn : String,
    slot_1: String,
    slot_2: String,
    shot_eat : [String],
    id_game : Number,
    id_shot : Number,
    surrender : Boolean
});
mongoose.model('Shot', ShotSchema);

module.exports = mongoose.model('Shot');