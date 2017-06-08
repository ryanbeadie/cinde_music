// Venue schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var descriptionSchema = new Schema ({content: String, authorId: String});
var reviewSchema = new Schema ({content: String, authorId: String});
var upcomingEventSchema = new Schema ({content: String, authorId: String});
var photoSchema = new Schema ({content: String, authorId: String});

var VenueSchema = new Schema({

  name: String,
  address: String,
  description:[descriptionSchema],
  review : [reviewSchema],
  photo : [photoSchema],
  upcomingEvent: [upcomingEventSchema]
});//end schema

var Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;
