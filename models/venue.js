// Venue schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VenueSchema = new Schema({
  name: String,
  adress: String,
  description: { type: String, required: true },
  review : String,
  photo : String,
  upcomingEvent: String
});//end schema

var Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;
