app.controller('crudCtrl', function($scope, crudService, $uibModal) {
	$scope.sortType = 'name'; 
    $scope.sortReverse = false;

	crudService.users.then(function successCallback(res) {
		$scope.users = res.data;
	});

	$scope.openAddModal = function() {
		var modalInstance = $uibModal.open({
			templateUrl: 'add-user.html',
			controller: 'addUserCtrl',
			resolve: {
				users: function() {
					return $scope.users;
				}
      		}
    	});
	};

	$scope.openUpdateModal = function() {
		var user = $(this)[0].user; //gets the user
		var modalInstance = $uibModal.open({
			templateUrl: 'update-user.html',
			controller: 'editUserCtrl',
			resolve: {
				user: function() {
					return user;
				},
				users: function() {
					return $scope.users;
				}
      		}
      	});
	};

	$scope.removeUser = function() {
		var user = $(this)[0].user; //gets the user
		crudService.deleteUser(user).then(function successCallback(res) {
			$scope.users = $scope.users.filter(function(el) {
				return el._id !== res.data._id;
			}, function errorCallback(res) {
				console.log(user);
				console.log("An error ocurred while deleting user");
			});
		});
	};
});