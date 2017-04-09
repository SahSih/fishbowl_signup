var app2 = angular.module("app2", []);
app2.controller('login', ['$scope', '$http', function($scope, $http) {
	$scope.data = [];

	var data = [{name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50} , {name: "Moroni", age: 50}
		, {name: "Noro", age: 50}, {name: "Noro", age: 50}, {name: "Zoro", age: 50}, {name: "Horo", age: 50}, {name: "IIII", age: 50}
		, {name: "IJJJro", age: 50}, {name: "XXXX", age: 51}, {name: "yyy", age: 30}];
	// this.tableParams = new NgTableParams({}, { dataset: data});

	$http({
		method : "GET",
		url : '/getUsers'
	}).success(function(data) {
		$scope.data = data.data;

	}).error(function(error) {

	});

	$scope.checkUser = function(abc) {

			$http({
				method : "POST",
				url : '/notifyUser',
				data : {
					"curl" : abc
				}
			}).success(function(data) {
				//checking the response data for statusCode
				if (data.statusCode == 401) {

				}
				else if (data.statusCode == 402) {

				}
				else if (data.statusCode == 500) {

				}
				else
				{

				}
			}).error(function(error) {

			});
		};
	}]);