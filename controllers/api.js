//the API controller
var User = require('../models/User.js');

exports.users = function(req, res) {
  User.find(function(err, users) {
    res.send(users);
  });
};

exports.createUser = function(req, res) {
	var user = new User({
		name: req.body.name,
		surname: req.body.surname,
		email: req.body.email,
		dni: req.body.dni,
		birthdate: req.body.birthdate
	});

	user.save(function(err) {
	  if (err) throw err;
	  console.log('User created!');
	  res.send(user); //return the just saved object
	});
};