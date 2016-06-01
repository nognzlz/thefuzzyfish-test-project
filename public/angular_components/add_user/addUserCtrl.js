app.controller('addUserCtrl', function($scope, $uibModalInstance, crudService, users) {
	$scope.userInput = {
		name: "",
		surname: "",
		dni: null,
		email: "",
		birthdate: ""
	};

	$scope.addUser = function() {
		crudService.createUser($scope.userInput).then(function successCallback(res) {
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