// Artist schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var descriptionSchema = new Schema ({content: String, authorId: String});
var reviewSchema = new Schema ({content: String, authorId: String});
var upcomingShowsSchema = new Schema ({content: String, authorId: String});
var photoSchema = new Schema ({content: String, authorId: String});



// var descriptionSchema = new Schema ({content: String, userId});
//Need to set up schemas so they work in array

var ArtistSchema = new Schema({
name: String,
description: [descriptionSchema],
review: [reviewSchema],
photo: [photoSchema],
upcomingShows: [upcomingShowsSchema]

});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
