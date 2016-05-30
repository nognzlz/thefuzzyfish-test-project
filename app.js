var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var config = require('./config');
var port = config.env.PORT || 8080; 
var router = express.Router();

//open MongoDB connection
mongoose.connect(config.MONGO_URL);

//app configuration
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + "/public"));
app.use('/api', router);

//set up the RESTful API
var api = require('./controllers/api.js');
router.get('/users', api.users);
router.post('/createUser', api.createUser);

//set app to listen to a port
app.listen(port, function () {
  console.log('App listening on port ' + port);
});