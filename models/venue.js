// Venue schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
  name: String,
  address: String,
  description: String,
  review : String,
  photo : String,
  upcomingEvent: String
});//end schema

var Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;
