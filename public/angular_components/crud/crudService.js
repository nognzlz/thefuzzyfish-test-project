app.service('crudService', function($http) {
	this.users = $http({
  		method: 'GET',
  		url: '/api/users'
	});

	this.createUser = function(user) {
		return $http({
			method: 'POST',
			url: '/api/createUser',
			data: { 
				name: user.name,
				surname: user.surname,
				dni: user.dni,
				email: user.email,
				birthdate: user.birthdate
			}
		});
	};
	
	this.deleteUser = function(user) {
		return $http({
  			method: 'DELETE',
  			url: '/api/deleteUser',
  			data: {_id: user._id},
  			headers: {"Content-Type": "application/json"}
		});
	};

	this.updateUser = function(user) {
		return $http({
			method: 'PUT',
			url: '/api/updateUser',
			data: user
		});
	};
});