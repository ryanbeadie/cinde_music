var express = require('express');
var router = express.Router();
var Artist = require('../models/artist');

router.get('/', function (req, res) {
  console.log('in router.get /');
  Artist.find({}, function (err, artist) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(artist);
  });
});

router.get('/solo', function (req, res) {
  console.log('in router.get/:id');
  Artist.find({_id: req.query.artistId}, function (err, artist) {
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


router.put('/', function (req, res) {
  console.log('Req body', req.body);
  // var artist = new Artist(req.body);
  var artist = {
    content: req.body.newDetails.content,
    authorId: req.body.newDetails.authorId
  };

  Artist.findByIdAndUpdate(req.body._id, {$push: { description: artist }}, function (err) {


    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});

module.exports = router;
