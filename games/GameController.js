// GameController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Game = require('./Game');

// CREATES A NEW GAME
router.post('/', function (req, res) {

    Game.create({
        starter: req.params.starter,
        listener: req.params.listener,
        id_game: req.params.id_game
        }, 
        function (err, game) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(game);
        });

});

// GETS A SINGLE GAME FROM THE DATABASE
router.get('/:id', function (req, res) {

    Game.find({ 'id_game': req.params.id }, function (err, game) {
        if (err) return res.status(500).send("There was a problem finding the game.");
        if (!game) return res.status(404).send("No game found.");
        res.status(200).send(game);
    });

});

// DELETES A GAME FROM THE DATABASE
router.delete('/:id', function (req, res) {

    Game.findByIdAndRemove(req.params.id, function (err, game) {
        if (err) return res.status(500).send("There was a problem deleting the game.");
        res.status(200).send("Game "+ game.id_game +" was deleted.");
    });
});

// UPDATES A SINGLE GAME IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, game) {
        if (err) return res.status(500).send("There was a problem updating the game.");
        res.status(200).send(game);
    });

});

// RETURNS ALL THE GAMES IN THE DATABASE
router.get('/', function (req, res) {

    Game.find({}, function (err, games) {
        if (err) return res.status(500).send("There was a problem finding the games.");
        res.status(200).send(games);
    });

});

module.exports = router;