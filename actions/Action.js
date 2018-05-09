// Action.js
var mongoose = require('mongoose');  
var ActionSchema = new mongoose.Schema({ 
    pawn : String,
    slot_1: String,
    slot_2: String,
    shot_eat : [String],
    id_game : Number,
    id_shot : Number,
    surrender : Boolean
});
mongoose.model('Action', ActionSchema);

module.exports = mongoose.model('Action');