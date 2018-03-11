angular.module('zenart').controller('homeController',
		[ '$scope','$state', function($scope,$state) {
			console.log("Inside Home controller");
			$scope.search = function(searchTxt){
			    $state.go("artists.search",{q: searchTxt},{reload:true});
			}
		} ]);