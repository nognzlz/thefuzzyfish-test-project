app.controller('addUserCtrl', function($scope, $uibModalInstance, addUserService, crudService, users) {
	$scope.userInput = {
		name: "",
		surname: "",
		dni: null,
		email: "",
		birthdate: ""
	};

	$scope.addUser = function() {
		addUserService.createUser($scope.userInput).then(function successCallback(res) {
			users.push(res.data);
			$scope.close();
		}, function errorCallback(res) {
			console.log(res);
		});
	};

	$scope.close = function() {
   		$uibModalInstance.dismiss('cancel');
  	};
})