angular.module('artists').controller('headerController',
		[ '$scope','$state', function($scope,$state) {
			console.log("Inside Header controller");
			$scope.search = function(searchTxt){
			    $state.go("artists.search",{q: searchTxt},{reload:true});
			}
		} ]);