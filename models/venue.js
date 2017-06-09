// Venue schema and model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var descriptionSchema = new Schema ({content:String, authorId: String, dateEntered:{type: Date, default: Date.now}});
var reviewSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now}});
var upcomingEventSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now}});
var photoSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now}});

// var descriptionSchema = new Schema ({content: {type: String, required:true}, authorId: {type:String, required:true}, dateEntered:{type: Date, default: Date.now, required:true}});
// var reviewSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now, required:true}});
// var upcomingEventSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now, required:true}});
// var photoSchema = new Schema ({content: String, authorId: String, dateEntered:{type: Date, default: Date.now, required:true}});

//schema
var VenueSchema = new Schema({
  name: String,
  address: String,
  description:[descriptionSchema],
  review : [reviewSchema],
  photo : [photoSchema],
  upcomingEvent: [upcomingEventSchema],
  addedBy: String,
  dateEntered:{type: Date, default: Date.now}
  });//end schema

var Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;
