// ActionController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Shot = require('./Shot');

// CREATES A NEW SHOT
router.post('/', function (req, res) {

    Shot.create({
        pawn : req.body.pawn,
        slot_1 : req.body.slot_1,
        slot_2 : req.body.slot_2,
        shot_eat : req.body.shot_eat,
        id_game : req.body.id_game,
        id_shot : req.body.id_shot,
        surrender : req.body.surrender
        }, 
        function (err, shot) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(shot);
        });

});

// GETS A SINGLE SHOT FROM THE DATABASE
router.get('/:id', function (req, res) {

    Shot.findById(req.params.id, function (err, shot) {
        if (err) return res.status(500).send("There was a problem finding the shot.");
        if (!shot) return res.status(404).send("No shot found.");
        res.status(200).send(shot);
    });

});

// DELETES A SHOT FROM THE DATABASE
router.delete('/:id', function (req, res) {

    Shot.findByIdAndRemove(req.params.id, function (err, shot) {
        if (err) return res.status(500).send("There was a problem deleting the shot.");
        res.status(200).send("Shot "+ shot.id_shot +" was deleted.");
    });
});

// UPDATES A SINGLE SHOT IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Shot.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, shot) {
        if (err) return res.status(500).send("There was a problem updating the shot.");
        res.status(200).send(shot);
    });

});

// RETURNS ALL THE SHOTS IN THE DATABASE
router.get('/', function (req, res) {

    Shot.find({}, function (err, shots) {
        if (err) return res.status(500).send("There was a problem finding the shots.");
        res.status(200).send(shots);
    });

});

module.exports = router;