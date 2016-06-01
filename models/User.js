var mongoose = require('mongoose');

var toLower = function(v) {
	return v.toLowerCase();
}

var userSchema = mongoose.Schema({
	name: String,
	surname: String,
	email: { type: String, set: toLower },
	dni: { type: Number },
	birthdate: { type: Date }
});

module.exports = mongoose.model('User', userSchema);