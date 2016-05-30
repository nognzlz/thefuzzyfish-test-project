app.controller('crudCtrl', function($scope, crudService, $uibModal) {
	crudService.users.then(function successCallback(res) {
		$scope.users = res.data;
	});

	$scope.openAddModal = function () {
		var modalInstance = $uibModal.open({
			templateUrl: 'add-user.html',
			controller: 'addUserCtrl',
			resolve: {
				users: function() {
					return $scope.users;
				}
      		}
    	});
	}
});