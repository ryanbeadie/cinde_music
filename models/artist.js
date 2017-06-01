// Artist schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
name: String,
description: [String],
review: [String],
photo: [String],
upcomingShows: [String]
  // lastName: { type: String, required: true }
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
