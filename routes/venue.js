var express = require('express');
var router = express.Router();
var Venue = require('../models/venue');

router.get('/', function (req, res) {
  Venue.find({}, function (err, venue) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(venue);
  });
});

router.get('/solo', function (req, res) {
  console.log('in router.get/:id');
  Venue.find({_id: req.query.venueId}, function (err, artist) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(artist);
  });
});

router.post('/', function (req, res) {
  console.log('Req body in post', req.body);
  var venue = new Venue(req.body);
  venue.save(function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});


router.put('/description', function (req, res) {
  console.log('Req body', req.body);
  // var artist = new Artist(req.body);
  var artist = {
    content: req.body.newDetails.content,
    authorId: req.body.newDetails.authorId
  };

  Venue.findByIdAndUpdate(req.body._id, {$push: { description: venue }}, function (err) {

    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});












module.exports = router;
