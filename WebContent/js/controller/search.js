angular.module('artists').controller('searchController',
		[ '$scope', '$stateParams','spotyifyService', function($scope, $stateParams,spotyifyService) {
			
			$scope.lastPage = false;
			$scope.page = 0;
			
			function loadArtists(){
			spotyifyService.search($stateParams.q,$scope.page ).then(function(response){
				var artists = response.data.artists;
				
				if(artists && artists.items && artists.items.length>0){
					$scope.errorMsg="";
					if($scope.page==0){
						$scope.artists = response.data.artists;
					}else{
						Array.prototype.push.apply($scope.artists.items,response.data.artists.items);
					}
					if(artists.items.length<20){
						$scope.lastPage = true;
					}
				}else if($scope.page==0){
					$scope.errorMsg = "Sorry, no results were found for "+$stateParams.q;
				} else if($scope.page>0){
					$scope.lastPage = true;
				}
			},function(error){
				alert("Error while getting artists")
			})
		}
			
			loadArtists();
			
			$scope.more = function(){
				$scope.page = $scope.page+1;
				loadArtists();
			}
			
		} ])