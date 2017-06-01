// Artist schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var descriptionSchema = new Schema ({content: String, authorId: String});
//Need to set up schemas so they work in array

var ArtistSchema = new Schema({
name: String,
description: String, //[descriptionSchema],
review: String,
photo: String,
upcomingShows: String

});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
