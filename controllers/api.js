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

exports.deleteUser = function(req, res) {
	User.findById(req.body._id, function(err, user) {
		if (err) throw err;
		if (user) user.remove(function(err) { // delete him
			if (err) throw err;
			console.log('User successfully deleted!');
		});
		res.send(user); //returns the deleted user
	});
};

exports.modifyUser = function(req, res) {
	console.log(req.body);
	User.findById(req.body._id, function(err, user) {
		if (err) throw err;
		if (user) {
			user.name = req.body.name;
			user.surname = req.body.surname;
			user.email = req.body.email;
			user.dni = req.body.dni;
			user.birthdate = req.body.birthdate;
			user.save(function(err) { // update him
				if (err) throw err;
				console.log('User successfully updated!');
			});
		}
	res.send(user);
	});
};