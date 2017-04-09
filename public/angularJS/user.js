//loading the 'login' angularJS module
var user = angular.module('user', []);
//defining the login controller
user.controllers

user.controller('user', function($scope, $http) {
	
	$scope.checkUser = function() {
		var fname = $scope.fname;
		var lname = $scope.lname;
		var email = $scope.email;
		var gender = $scope.gender;
		var cuisine = $scope.cuisine;
		if(fname != undefined && lname != undefined && email != undefined && gender != undefined && cuisine != undefined  && $scope.accept != undefined ){
		$http({
			method : "POST",
			url : '/subscribe',
			data : {
				"name" : $scope.name,
				"age" : $scope.age
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 401) {
				$scope.invalid_user = false;
			}
			else if (data.statusCode == 402) {
				$scope.invalid_user = false;
			}
			else if (data.statusCode == 500) {
				alert("Some error occurred, Redirecting to login screen");
				window.location.assign("/signin");
			}
			else
				{
				$scope.invalid_travel = true;
				window.location.assign("/loggedIn");
				}
		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
	}
	
	})
