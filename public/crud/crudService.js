app.service('crudService', function($http) {
	var req = {
  		method: 'GET',
  		url: '/api/users'
	};
	this.users = $http(req);
});