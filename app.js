var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

//var to requirenthe routes
var artist = require('./routes/artist');
var venue = require('./routes/venue');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/cindiemusic');

//uses
app.use(express.static('public'));
app.use(bodyParser.json());
app.use( bodyParser.urlencoded ({extended: true}));

//port set up to work with heroku OR localhost
var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('up 5000');
});

app.use('/venue', venue);
app.use('/artist', artist);


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
