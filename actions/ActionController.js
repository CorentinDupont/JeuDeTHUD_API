// ActionController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Action = require('./Action');

// CREATES A NEW ACTION
router.post('/', function (req, res) {

    Action.create({
        pawn : req.body.pawn,
        slot_1 : req.body.slot_1,
        slot_2 : req.body.slot_2,
        shot_eat : req.body.shot_eat,
        id_game : req.body.id_game,
        id_shot : req.body.id_shot,
        surrender : req.body.surrender
        }, 
        function (err, action) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(action);
        });

});

// GETS A SINGLE ACTION FROM THE DATABASE
router.get('/:id', function (req, res) {

    Action.findById(req.params.id, function (err, action) {
        if (err) return res.status(500).send("There was a problem finding the action.");
        if (!action) return res.status(404).send("No action found.");
        res.status(200).send(action);
    });

});

// DELETES A ACTION FROM THE DATABASE
router.delete('/:id', function (req, res) {

    Action.findByIdAndRemove(req.params.id, function (err, action) {
        if (err) return res.status(500).send("There was a problem deleting the action.");
        res.status(200).send("Action "+ action.id_shot +" was deleted.");
    });
});

// UPDATES A SINGLE ACTION IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Action.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, action) {
        if (err) return res.status(500).send("There was a problem updating the action.");
        res.status(200).send(action);
    });

});

// RETURNS ALL THE ACTIONS IN THE DATABASE
router.get('/', function (req, res) {

    Action.find({}, function (err, actions) {
        if (err) return res.status(500).send("There was a problem finding the actions.");
        res.status(200).send(actions);
    });

});

module.exports = router;