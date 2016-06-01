app.controller('editUserCtrl', function($scope, $uibModalInstance, crudService, user, users) {
	$scope.userInput = {
		name: user.name,
		surname: user.surname,
		dni: user.dni,
		email: user.email,
		birthdate: new Date(user.birthdate)
	};

	$scope.updateUser = function() {
		user.name = $scope.userInput.name;
		user.surname = $scope.userInput.surname;
		user.dni = $scope.userInput.dni;
		user.email = $scope.userInput.email;
		user.birthdate = $scope.userInput.birthdate;
		crudService.updateUser(user).then(function successCallback(res) {
			$scope.close();
		}, function errorCallback(res) {
			console.log(res);
		});
	};

	$scope.close = function() {
   		$uibModalInstance.dismiss('cancel');
  	};
});