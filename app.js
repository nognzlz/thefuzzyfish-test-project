var mongoose = require('mongoose');
var express = require('express');
var config = require('./config');

mongoose.connect(config.MONGO_URL);

var app = express();
var db = mongoose.connection;

app.use(express.static(__dirname + "/public"));

app.listen(3000, function () {
  console.log('App listening on port 3000');
});