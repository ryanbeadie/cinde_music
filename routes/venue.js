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
  var venue = {
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

//update venue review
router.put('/reviews', function (req, res) {
  console.log('in venue reviews put');
  console.log('new review:', req.body.newReview);
  var venue = {
    content: req.body.newReview.content,
    authorId: req.body.newReview.authorId
  };
  Venue.findByIdAndUpdate(req.body._id, {$push: { review: venue }}, function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});


router.put('/upcomingevents', function (req, res) {
  console.log('in new event put');
  // console.log('Req body', req.body);
  console.log('new event:', req.body.newUpcomingEvent);
  // var artist = new Artist(req.body);
  var venue = {
    content: req.body.newUpcomingEvent.content,
    authorId: req.body.newUpcomingEvent.authorId
  };
  Venue.findByIdAndUpdate(req.body._id, {$push: { upcomingEvent: venue }}, function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});

//update photo
router.put('/photo', function (req, res) {
  console.log('in photo put');
  console.log('new photo:', req.body.newPhoto);
  var venue = {
    content: req.body.newPhoto.content,
    authorId: req.body.newPhoto.authorId
  };
  console.log('venue=',venue);
  Venue.findByIdAndUpdate(req.body._id, {$push: { photo: venue }}, function (err) {
    if (err) {
      console.log('Error saving', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201); //created
  });
});

module.exports = router;
