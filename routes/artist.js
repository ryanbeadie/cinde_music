var express = require('express');
var router = express.Router();
var Artist = require('../models/artist');


router.get('/', function (req, res) {
  Artist.find({}, function (err, artist) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(artist);
  });
});

router.post('/', function (req, res) {
  console.log('Req body', req.body);
  var artist = new Artist(req.body);

  artist.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});



module.exports = router;
