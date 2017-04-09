



var user = angular.module('user', ["ngTable"]);
//defining the login controller
user.controllers

user.controller('user', ['$scope', '$http','NgTableParams', function($scope, $http, NgTableParams) {

	$scope.init = function initProducts() {

		$http({
			method : "GET",
			url : '/getUsers'
		}).success(function(data) {
			var data = [{name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50}
				, {name: "Noro", age: 50}, {name: "Noro", age: 50}, {name: "Zoro", age: 50}, {name: "Horo", age: 50}, {name: "IIII", age: 50}
				, {name: "IJJJro", age: 50}, {name: "XXXX", age: 51}, {name: "yyy", age: 30}];
			this.tableParams = new NgTableParams({}, { dataset: data});

		}).error(function(error) {
			var data = [{name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50}
				, {name: "Noro", age: 50}, {name: "Noro", age: 50}, {name: "Zoro", age: 50}, {name: "Horo", age: 50}, {name: "IIII", age: 50}
				, {name: "IJJJro", age: 50}, {name: "XXXX", age: 51}, {name: "yyy", age: 30}];
			this.tableParams = new NgTableParams({}, { dataset: data});
		});

		var data = [{name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50}
			, {name: "Noro", age: 50}, {name: "Noro", age: 50}, {name: "Zoro", age: 50}, {name: "Horo", age: 50}, {name: "IIII", age: 50}
			, {name: "IJJJro", age: 50}, {name: "XXXX", age: 51}, {name: "yyy", age: 30}];
		this.tableParams = new NgTableParams({}, { dataset: data});
	};

	$scope.init();
	$scope.checkUser = function(abc) {
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
	
	}])
