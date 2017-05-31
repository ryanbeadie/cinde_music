// Artist schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  firstName: String,
  lastName : String
  // lastName: { type: String, required: true }
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
