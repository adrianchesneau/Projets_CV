var express = require('express');
var router = express.Router();



const Places = require('../models/places');

router.post('/', (req, res) => {
    const newPlace = new Places({
        nickname: req.body.nickname,
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    });
    newPlace.save().then(() => {
        res.json({ result: true })
    });
})

router.get('/:nickname', (req, res) => {

    Places.find({ nickname: req.params.nickname })
        .then(place => {

            res.json({ result: true, places: place })

        });
})

router.delete('/', (req, res) => {
    Places.deleteOne({ nickname: req.body.nickname, name: req.body.name }).then(() => {

        Places.find().then(data => {
            res.json({ result: true, })
        });

    });
})




module.exports = router;
