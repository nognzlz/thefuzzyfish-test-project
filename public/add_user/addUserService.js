app.service('addUserService', function($http) {
	this.createUser = function(user) {
		var req = {
			method: 'POST',
			url: '/api/createUser',
			data: { 
				name: user.name,
				surname: user.surname,
				dni: user.dni,
				email: user.email,
				birthdate: user.birthdate
			}
		}
		return $http(req);
	}
});