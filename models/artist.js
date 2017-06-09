// Artist schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var descriptionSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now} });
var reviewSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now}});
var upcomingShowsSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now}});
var photoSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now}});




var ArtistSchema = new Schema({
name: String,
description: [descriptionSchema],
review: [reviewSchema],
photo: [photoSchema],
upcomingShows: [upcomingShowsSchema],
dateEntered:{type: Date, default: Date.now}

});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
